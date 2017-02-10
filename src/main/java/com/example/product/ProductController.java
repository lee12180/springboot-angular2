package com.example.product;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.model.Product;
import com.example.product.service.ProductService;

@RestController
@RequestMapping(value = "/api/product")
public class ProductController {
	
	@Autowired
    private ProductService productService;
	
	@RequestMapping(value = "/list",method = RequestMethod.GET)
    public List<Product> getProductList() throws Exception{
		System.out.println("getProductList start");
		
		System.out.println("isAuthenticated :: " + SecurityContextHolder.getContext().getAuthentication().isAuthenticated());
		System.out.println("getPrincipal :: " + SecurityContextHolder.getContext().getAuthentication().getPrincipal());
		
		List<Product> productList = productService.selectProductList();
		System.out.println("productList :: " + productList);
        return productList;
    }
	
	@RequestMapping(value = "/add",method = RequestMethod.POST)
    public Product add(@RequestBody Product product) throws Exception{
		System.out.println("add start");
		Product product2 = productService.add(product);
        return product2;
    }
	
	@RequestMapping(value = "/list2",method = RequestMethod.GET)
    public @ResponseBody List<Product> getProductList2() throws Exception{
		System.out.println("getProductList2 start");
		
		List<Product> productList = productService.selectProductList();
		System.out.println("productList :: " + productList);
        return productList;
    }
}
