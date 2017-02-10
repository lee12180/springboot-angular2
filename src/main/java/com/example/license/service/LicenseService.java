package com.example.license.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.license.repository.LicenseRepository;
import com.example.model.License;

@Service
public class LicenseService {
	
	@Autowired
	private LicenseRepository licenseRepository;
	
	public List<License> selectLicenseList() {
		List<License> productList = licenseRepository.findAll();
		return productList;
	}

}
