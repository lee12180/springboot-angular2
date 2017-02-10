package com.example.model;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="tb_license")
public class License {
	
	@Id
	private int licenseId;
	
	private String activationKey;
	private String productCode;
	private String period;
	private String expiryDate;
	private String regDate;
	private String regUserid;
	
	public int getLicenseId() {
		return licenseId;
	}
	public void setLicenseId(int licenseId) {
		this.licenseId = licenseId;
	}
	public String getActivationKey() {
		return activationKey;
	}
	public void setActivationKey(String activationKey) {
		this.activationKey = activationKey;
	}
	public String getProductCode() {
		return productCode;
	}
	public void setProductCode(String productCode) {
		this.productCode = productCode;
	}
	public String getPeriod() {
		return period;
	}
	public void setPeriod(String period) {
		this.period = period;
	}
	public String getExpiryDate() {
		return expiryDate;
	}
	public void setExpiryDate(String expiryDate) {
		this.expiryDate = expiryDate;
	}
	public String getRegDate() {
		return regDate;
	}
	public void setRegDate(String regDate) {
		this.regDate = regDate;
	}
	public String getRegUserid() {
		return regUserid;
	}
	public void setRegUserid(String regUserid) {
		this.regUserid = regUserid;
	}
	
	
}
