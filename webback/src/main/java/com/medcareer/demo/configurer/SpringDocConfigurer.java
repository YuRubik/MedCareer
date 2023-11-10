package com.medcareer.demo.configurer;

import io.swagger.v3.oas.models.ExternalDocumentation;
import io.swagger.v3.oas.models.OpenAPI;
import io.swagger.v3.oas.models.info.Contact;
import io.swagger.v3.oas.models.info.Info;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class SpringDocConfigurer {

    //springdoc url:http://localhost:8080/swagger-ui/index.html#/

    @Bean
    public OpenAPI createRestApi(){
        return new OpenAPI().info(info());
    }

    private Info info(){
        return new Info().title("Spring Boot实战").description("接口文档说明")
                .contact(new Contact().name("rubik").email("rubikliu@outlook.com")
                        .url("https://www.instagram.com/rubik.128/"))
                .version("1.0");

    }

}
