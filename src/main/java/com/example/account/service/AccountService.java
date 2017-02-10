package com.example.account.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import com.example.account.repository.AccountRepository;
import com.example.model.User;


@Service
public class AccountService implements UserDetailsService {
	
	@Autowired
	private AccountRepository accountRepository;
	
	@Autowired 
	AuthenticationManager authenticationManager;


	@Override
	public UserDetails loadUserByUsername(String userId) throws UsernameNotFoundException {
		User user = accountRepository.findByUserId(userId);
		
		System.out.println("loadUserByUsername user :: " + user);
		System.out.println("loadUserByUsername user getUserName :: " + user.getUserName());
		System.out.println("loadUserByUsername finish");
		//사용자 정보 없음 에러처리 
		
		// TODO Auto-generated method stub
		return user;
	}
	
	public void logout(){
        if(SecurityContextHolder.getContext().getAuthentication() != null
                && SecurityContextHolder.getContext().getAuthentication().isAuthenticated())
        {
        	System.out.println("logout!!");
        	
            //SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        	
            SecurityContextHolder.clearContext();
            
            //System.out.println("securityUser :: " + securityUser);
//            UserDTO userDTO = MockUsers.findById(securityUser.getId());
//            if(userDTO != null){
//                userDTO.setPublicSecret(null);
//            }

        }
    }
}
