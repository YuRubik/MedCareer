package com.medcareer.demo.controller;

import io.swagger.v3.oas.annotations.tags.Tag;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import io.swagger.v3.oas.annotations.Operation;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/rest")
@Tag(name = "名字", description = "描述")
public class RestfulController {
    @GetMapping("/hi")
    @Operation(summary = "say hi")
    public String viewDoc(){
        return "Hello SpringDoc";
    }
}
