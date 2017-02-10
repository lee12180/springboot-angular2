package com.example.product.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.model.Product;
import com.example.product.repository.ProductRepository;

@Service
public class ProductService {
	@Autowired
	private ProductRepository productRepository;
	
	public List<Product> selectProductList() {
		List<Product> productList = productRepository.findAll();
		return productList;
	}
	
	public Product add(Product product) {
		System.out.println("product add getProductCode :: " + product.getProductCode());
		System.out.println("product add getProductName :: " + product.getProductName());
		
		productRepository.save(product);
		return new Product();
	}

}
