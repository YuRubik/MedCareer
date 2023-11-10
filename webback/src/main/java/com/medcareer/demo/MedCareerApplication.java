package com.medcareer.demo;

import org.mybatis.spring.annotation.MapperScan;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.jpa.repository.config.EnableJpaAuditing;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;

@EnableWebMvc
@EnableJpaAuditing
@MapperScan("com.medcareer.demo.mapper")
@SpringBootApplication()
public class MedCareerApplication {
	public static void main(String[] args) {
		SpringApplication.run(MedCareerApplication.class, args);
	}
}
