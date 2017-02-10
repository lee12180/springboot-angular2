package com.example.license.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.model.License;

public interface LicenseRepository extends JpaRepository <License, Integer> {

}
