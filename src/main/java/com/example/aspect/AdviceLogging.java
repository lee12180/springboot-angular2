package com.example.aspect;

import org.aspectj.lang.ProceedingJoinPoint;
import org.aspectj.lang.annotation.After;
import org.aspectj.lang.annotation.Around;
import org.aspectj.lang.annotation.Aspect;
import org.aspectj.lang.annotation.Before;
import org.aspectj.lang.annotation.Pointcut;
import org.springframework.stereotype.Service;


@Service 
@Aspect 
public class AdviceLogging {
	@Pointcut("execution(* com.example.product.service.ProductService.selectProductList*(..))")
    public void logging() { 
		System.out.println("logging.....");
	}
     
   @Pointcut("execution(* com.example.product.service.ProductService.*selectProductList(..))")
    public void authentification() {
	   System.out.println("authentification.....");
   }
     
   @Before("logging()") 
   public void before() {
        System.out.println("* before *"); 
   } 
    
   @After("authentification()") 
   public void after() {
        System.out.println("* after *"); 
   } 
   
   @Around("execution(* com.example..*Controller.*(..))")
   public Object defaultLog(ProceedingJoinPoint joinPoint) throws Throwable {
	   System.out.println("joinPoint :: " + joinPoint);
	   System.out.println("log test");
	   return joinPoint.proceed();
   }

}
