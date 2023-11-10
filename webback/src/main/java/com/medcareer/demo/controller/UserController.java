package com.medcareer.demo.controller;

import com.medcareer.demo.entity.User;
import com.medcareer.demo.repository.UserRepository;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@Tag(name = "user controller")
@RestController
@RequestMapping("/users")
public class UserController {
    @Autowired
    private UserRepository userRepository;
    @Operation(summary = "根据id获取用户信息")
    @GetMapping("/{id}")
    public User get(@PathVariable int id){
        return userRepository.findById(id).get();
    }

    @Operation(summary = "根据name获取用户信息")
    @GetMapping("/name/{name}")
    public List<User> get(@PathVariable String name){
        return userRepository.findByNameContaining(name);
    }

    @Operation(summary = "创建用户")
    @PostMapping
    public User create(@RequestBody User user){
        return userRepository.save(user);
    }


    @Operation(summary = "更新用户")
    @PutMapping
    public User update(@RequestBody User user){
        return userRepository.save(user);
    }

    @Operation(summary = "删除用户")
    @DeleteMapping("/{id}")
    public void delete(@PathVariable int id){
        userRepository.deleteById(id);
    }

    @Operation(summary = "得到所有用户")
    @GetMapping("/all")
    public Page<User> getAll(@RequestParam(defaultValue = "id") String property){
        Pageable pageable = PageRequest.of(2,1, Sort.Direction.ASC, property);
        return userRepository.findAll(pageable);
    }
}
