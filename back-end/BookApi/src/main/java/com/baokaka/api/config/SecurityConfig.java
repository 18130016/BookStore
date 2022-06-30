package com.baokaka.api.config;

import java.util.Collections;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.CorsConfigurationSource;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;

import com.baokaka.api.util.CustomFilter;



@Configuration
@EnableWebSecurity
public class SecurityConfig extends WebSecurityConfigurerAdapter {

	 @Bean
	    public PasswordEncoder passwordEncoder() {
	        return new BCryptPasswordEncoder();
	    }

	    @Bean
	    public CustomFilter getCustomAuthorizationFilter() {
	        return new CustomFilter();
	    }

	    @Bean
	    CorsConfigurationSource corsConfigurationSource() {
	        CorsConfiguration configuration = new CorsConfiguration();
	        configuration.setAllowedOrigins(Collections.singletonList("*"));
	        configuration.setAllowedMethods(Collections.singletonList("*"));
	        configuration.setAllowedHeaders(Collections.singletonList("*"));
	        UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
	        source.registerCorsConfiguration("/**", configuration);
	        return source;
	    }
	    

	    @Override
	    protected void configure(HttpSecurity http) throws Exception {
	        http.csrf().disable()
	                .cors()
	                .and()
	                .sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS)
	                .and()
	                .authorizeRequests()
	                .antMatchers("/api/login/**", "/api/register/**","/api/book/**","/api/selling","/api/cmt/**").permitAll()
	                .anyRequest().authenticated()
	                .and()
	                .addFilterBefore(getCustomAuthorizationFilter(), UsernamePasswordAuthenticationFilter.class);
	    }
}
