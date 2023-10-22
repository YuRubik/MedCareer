package com.medcareer.demo;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;

@EnableWebMvc
@SpringBootApplication()
public class MedCareerApplication {
	public static void main(String[] args) {
		SpringApplication.run(MedCareerApplication.class, args);
	}
}
