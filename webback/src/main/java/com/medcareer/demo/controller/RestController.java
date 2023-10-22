package com.medcareer.demo.controller;

import com.medcareer.demo.entity.User;
import jakarta.validation.Valid;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.*;
@org.springframework.web.bind.annotation.RestController
@RequestMapping("controller")
@Slf4j
public class RestController {
    @GetMapping("/helloWorld")
    public String helloWorld(){
        return "Hello World";
    }

    @GetMapping("/hello")
    public String hello(){
        log.info("hello");
        return "Hello World";
    }

    @GetMapping("/user")
    public User getUser(@RequestParam(name = "person", required = false, defaultValue = "rubik") String name, @RequestParam int age){
        User user = new User();
        user.setName(name);
        user.setAge(age);
        return user;
    }

    @GetMapping("/user/{name}/{age}")
    public User defineUser(@PathVariable(required = false) String name, @PathVariable int age){
        User user = new User();
        user.setName(name);
        user.setAge(age);
        return user;
    }

    @PostMapping("/user/post")
    public User postUser(@RequestBody @Valid User user){
        return user;
    }
}
