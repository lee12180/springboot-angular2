package com.example.license;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.example.license.service.LicenseService;
import com.example.model.License;

@RestController
@RequestMapping(value = "/api/license")
public class LicenseController {

	@Autowired
    private LicenseService licenseService;
	
	@RequestMapping(value = "/list",method = RequestMethod.GET)
    public List<License> getLicenseList() throws Exception{
		System.out.println("getLicenseList start");
		List<License> licenseList = licenseService.selectLicenseList();
		System.out.println("licenseList :: " + licenseList);
        return licenseList;
    }
}
