package com.example.account;

import java.util.List;

import javax.servlet.http.HttpServletResponse;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.ModelAndView;

import com.example.account.service.AccountService;
import com.example.model.Product;
import com.example.model.User;

@RestController
@RequestMapping(value = "/api/account")
public class AccountController {
	private static final Logger logger = LoggerFactory.getLogger(AccountController.class);

	@Autowired
    private AccountService accountService;
	
	@Autowired
    private AuthenticationManager authenticationManager;
	
	@Autowired
    private UserDetailsService userDetailsService;
	
	@RequestMapping
	public @ResponseBody String index() {
		return "hello~! springboot";
	}
	
//	@RequestMapping(value = "/loginForm", method = RequestMethod.GET)
//	public ModelAndView loginForm() {
//		logger.info("Start loginForm");
//		ModelAndView mv = new ModelAndView();
//		mv.setViewName("account/login");
//		return mv;
//	}
	
	@RequestMapping("/hello")
	public String index(Model model) {
		model.addAttribute("name", "SpringBlog from Millky");
		return "hello";
	}
	
	@RequestMapping(value = "/login", method = RequestMethod.POST)
	public UserDetails login(@RequestBody User user) throws Exception {
		System.out.println("login start");
		System.out.println("login user getUserId ~!" + user.getUserId());
		
		//try {
			UsernamePasswordAuthenticationToken authenticationToken = new UsernamePasswordAuthenticationToken(user.getUserId(),user.getPassword());
	        Authentication authentication = authenticationManager.authenticate(authenticationToken);
	        SecurityContextHolder.getContext().setAuthentication(authentication);
	        
	        User user2 = (User) userDetailsService.loadUserByUsername(user.getUserId());
	        
			//UserDetails user2 = accountService.loadUserByUsername(user.getUserId());
	        System.out.println("user2 :: " +user2);
	        return user2;
	        
		//}catch(Exception e) {
		//	System.out.println("eeee : " + e);
		//}
		
		//return null;
	}
	
	@RequestMapping(value = "/logout",method = RequestMethod.GET)
    public void logout(){
		System.out.println("logout start");
		accountService.logout();
    }
	
}
