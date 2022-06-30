package com.baokaka.api.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.baokaka.api.model.User;
import com.baokaka.api.payloads.AuthRequest;
import com.baokaka.api.payloads.AuthResponse;
import com.baokaka.api.repository.UserRepository;
import com.baokaka.api.util.JwtService;


@Service
public class UserService {
	@Autowired
	private  UserRepository userRepository;
	
	@Autowired
    private  PasswordEncoder passwordEncoder;
	@Autowired
    private  JwtService jwtService;
    
    
    public User getUserByUserName(String username) {
    	List<User> list = userRepository.findAll();
    	if(list.size()==0) {
    		return null;
    	}else {
        	for(User u:list) {
        		if(u.getUserName().equalsIgnoreCase(username)){
        			return u;
        		}
        	}
    	}
    	return null;
    }
    
    
    public AuthResponse login(AuthRequest request) {
        User user = this.getUserByUserName(request.getUserName());
        if (user == null || !passwordEncoder.matches(request.getPassWord(), user.getPassWord())) {
            return new AuthResponse(false,"Sai tên đăng nhập hoặc mật khẩu");
        }
        return new AuthResponse(true,jwtService.generateToken(user));
    }
    
    public AuthResponse register(User request) {
        if (this.getUserByUserName(request.getUserName()) != null) {
            return new AuthResponse(false,"Đăng ký tài khoản thất bại");
        }else {
        	User user = new User();
        	user.setUserName(request.getUserName());
        	user.setPassWord(passwordEncoder.encode(request.getPassWord()));
        	user.setFull_name(request.getFull_name());
        	user.setBirthday(request.getBirthday());
        	user.setAdmin(request.isAdmin());   
        	userRepository.save(user);
        	}
      
        return new AuthResponse(true,"Đăng ký tài khoản thành công");
        		
    }
}
