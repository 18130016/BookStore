package com.baokaka.api.util;

import java.io.IOException;
import java.util.Collections;

import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.filter.OncePerRequestFilter;

import com.baokaka.api.model.User;

import lombok.extern.slf4j.Slf4j;

@Slf4j
public class CustomFilter extends OncePerRequestFilter{
	
	
	private final String BEARER = "Bearer ";
	
    @Autowired
    private JwtService jwtService;

	@Override
	protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain)
			throws ServletException, IOException {
		String authorizationHeader = request.getHeader(HttpHeaders.AUTHORIZATION);
        if (authorizationHeader != null && authorizationHeader.startsWith(BEARER)) {
            try {
                String token = authorizationHeader.substring(BEARER.length());
                if (jwtService.isValidToken(token)) {
                    User appUser = jwtService.getUserFromToken(token);
                    UsernamePasswordAuthenticationToken authenticationToken = new UsernamePasswordAuthenticationToken(appUser.getUserName(), null, Collections.emptyList());
                    SecurityContextHolder.getContext().setAuthentication(authenticationToken);
                    filterChain.doFilter(request, response);
                } else {
                    response.setStatus(HttpStatus.FORBIDDEN.value());
                    System.out.println("Token is invalid");
                }
            } catch (Exception exception) {
            	System.out.println("Error request: {}" + exception.getMessage());
            }
        } else {
            filterChain.doFilter(request, response);
        }
		
	}

}
