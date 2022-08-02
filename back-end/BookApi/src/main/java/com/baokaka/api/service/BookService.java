package com.baokaka.api.service;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;


import org.springframework.stereotype.Service;

import com.baokaka.api.model.Book;
import com.baokaka.api.model.Comment;
import com.baokaka.api.payloads.BookFilter;
import com.baokaka.api.payloads.BookPaginationAndFilter;
import com.baokaka.api.payloads.BookResponse;
import com.baokaka.api.repository.BookRepository;
import com.baokaka.api.repository.CommentRepository;

@Service
public class BookService {

	@Autowired
	private BookRepository bookRepository;

	@Autowired CommentRepository cmtRepository;

	public List<BookResponse> filter(List<BookResponse> list, BookFilter filter) {
		List<BookResponse> result = list;

		if (filter.getName().length() > 0) {
			result = filterByName(result, filter.getName());
		}
		if (filter.getAuthor().size() > 0) {
			result = filterByAuthor(result, filter.getAuthor());
		}

		if (filter.getTypeOfBook().size() > 0) {
			result = filterByTypeOfBook(result, filter.getTypeOfBook());
		}

		return result;
	}

	public List<BookResponse> filterByName(List<BookResponse> list, String name) {
		List<BookResponse> result = new ArrayList<BookResponse>();
		for (BookResponse book : list) {
			if (book.getName().indexOf(name) != -1) {
				if(!checkExits(result, book)) {
					result.add(book);
				}
			}
		}
		return result;
	}

	public List<BookResponse> filterByAuthor(List<BookResponse> list, List<String> authorfilter) {
		List<BookResponse> result = new ArrayList<BookResponse>();
		for (BookResponse book : list) {
			List<String> author = Arrays.asList(book.getAuthor());
			for (String auth : authorfilter) {
				if (author.indexOf(auth) != -1) {
					if(!checkExits(result, book)) {
						result.add(book);
					}
				}
			}
		}
		return result;
	}

	public List<BookResponse> filterByTypeOfBook(List<BookResponse> list, List<String> typefilter) {
		List<BookResponse> result = new ArrayList<BookResponse>();
		for (BookResponse book : list) {
			List<String> typeofBook = Arrays.asList(book.getTypeOfBook());
			for (String type : typefilter) {
				if (typeofBook.indexOf(type) != -1) {
					if(!checkExits(result, book)) {
						result.add(book);
					}
				}
			}
		}
		return result;
	}

	public boolean checkExits(List<BookResponse> list ,BookResponse b) {
		for(BookResponse t:list) {
			if(t.getId()==b.getId()) {
				return true;
			}
		}

		return false;
	}

	public List<BookResponse> pagination(List<BookResponse> list,int page ,int size ){
		int m = (page*size);

		if(m>list.size()) {
			m = m +(list.size()-m);
		}

		int startIndex = (page*size)-size;
		int endindex = m;
		return list.subList(startIndex,endindex);

	}

	public BookPaginationAndFilter findAllBookWithPaginationAndFilter( BookFilter filter) {

		List<Book> book = bookRepository.findAll();

		List<BookResponse> list = new ArrayList<>();
		for (Book b : book) {
			BookResponse nb = new BookResponse(b);
			nb.setCountCmt(countCmt(b.getId()));
			list.add(nb);
		}

		list = filter(list, filter);

		int countpage = 0;
		if(list.size()%filter.getSize()==0) {
			countpage = list.size()/filter.getSize();
		}else  countpage = list.size()/filter.getSize() + 1;


		return new BookPaginationAndFilter(filter.getSize(), pagination(list, filter.getPage(), filter.getSize()),list.size(),countpage);

	}

	public int countCmt(int id) {
		int count = 0;
		for (Comment comment : cmtRepository.findAll()) {
			if(comment.getBook_id()==id) {
				count++;
			}
		}
		return count;
	}

}
