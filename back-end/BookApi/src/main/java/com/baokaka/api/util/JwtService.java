package com.baokaka.api.util;

import java.util.Calendar;
import java.util.Date;

import org.apache.commons.lang3.StringUtils;
import org.springframework.stereotype.Component;

import com.auth0.jwt.JWT;
import com.auth0.jwt.JWTCreator;
import com.auth0.jwt.JWTVerifier;
import com.auth0.jwt.algorithms.Algorithm;
import com.auth0.jwt.exceptions.JWTVerificationException;
import com.auth0.jwt.interfaces.DecodedJWT;
import com.baokaka.api.model.User;

import lombok.extern.slf4j.Slf4j;

@Slf4j
@Component
public class JwtService {
	
	 private static final Algorithm algorithm = Algorithm.HMAC256("baokaka-book-api");
	 
	 private int tokenLifeTimeHours = 24;
	 
	 public boolean isValidToken(String token) {
	        return !isNoneValidToken(token);
	    }

	    private boolean isNoneValidToken(String token) {
	        if (StringUtils.isEmpty(token)) return true;
	        try {
	            JWTVerifier verifier = JWT.require(algorithm).build();
	            DecodedJWT decoded = verifier.verify(token);
	            Long expiredTime = decoded.getExpiresAt().getTime();
	            return System.currentTimeMillis() >= expiredTime;
	        } catch (JWTVerificationException ex) {
	            System.out.println("Token is invalid: {}"+ token  + ex);
	        }
	        return true;
	    }

	    public User getUserFromToken(String token) {
	        if (isNoneValidToken(token)) return null;
	        
	        User u = new User();
	        u.setUserName(JWT.decode(token).getSubject());
	        return u;
	    }

	    public String generateToken(User user) {
	        return this.getToken(user, this.tokenLifeTimeHours);
	    }

	    private String getToken(User appUser, int expiredHours) {
	        Calendar calendar = Calendar.getInstance();
	        calendar.add(Calendar.HOUR, expiredHours);

	        JWTCreator.Builder creator = JWT.create()
	                .withSubject(appUser.getUserName())
	                .withExpiresAt(calendar.getTime())
	                .withIssuedAt(new Date())
	                .withClaim("fullName", appUser.getFull_name());
	        return creator.sign(algorithm);
	    }

}
