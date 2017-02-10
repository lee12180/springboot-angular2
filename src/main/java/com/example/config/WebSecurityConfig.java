package com.example.config;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.core.userdetails.UserDetailsService;

@Configuration
public class WebSecurityConfig extends WebSecurityConfigurerAdapter {
	
	@Autowired
    private UserDetailsService userDetailsService;
	
	@Override
	protected void configure(HttpSecurity http) throws Exception {
		http
        .authorizeRequests()
            .antMatchers("/", "/home").permitAll()
            .antMatchers("/api/license/**").authenticated()
            //.anyRequest().authenticated()
            .anyRequest().permitAll()
            .and()
        .formLogin()
            .loginPage("/#login")
            .permitAll()
            .and()
        .logout()
            .permitAll()
            .and()
		.csrf().disable();

		
//		http.authorizeRequests()
//		  .antMatchers("/hello").access("hasRole('ROLE_ADMIN')")
//		  .anyRequest().permitAll()
//		  .and().formLogin().loginPage("/loginForm")
//		  	.loginProcessingUrl("/login")
//		    .usernameParameter("username").passwordParameter("password")
//		  .and()
//		    .logout().logoutSuccessUrl("/login?logout") 
//		   .and()
//		   .exceptionHandling().accessDeniedPage("/403")
//		  .and()
//		    .csrf().disable();

	}
	
//	@Override
//	protected void configure(AuthenticationManagerBuilder authManagerBuilder) throws Exception {
//		authManagerBuilder.userDetailsService(userDetailsService());
//	}
}
