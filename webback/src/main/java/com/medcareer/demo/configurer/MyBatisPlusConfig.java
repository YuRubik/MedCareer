package com.medcareer.demo.configurer;

import com.baomidou.mybatisplus.annotation.DbType;
import com.baomidou.mybatisplus.extension.plugins.MybatisPlusInterceptor;
import com.baomidou.mybatisplus.extension.plugins.inner.PaginationInnerInterceptor;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.io.*;
import java.util.Scanner;

@Configuration
public class MyBatisPlusConfig {
    @Bean
    public MybatisPlusInterceptor MyBatisPlusConfig(){
        MybatisPlusInterceptor mybatisPlusInterceptor = new MybatisPlusInterceptor();
        mybatisPlusInterceptor.addInnerInterceptor(new PaginationInnerInterceptor(DbType.MYSQL));
        return mybatisPlusInterceptor;
    }

    public static void displayFile(String fname) {
        //TODO: Open the file and print each line to the screen.
        //TODO: Don't forget to close the file when you are done.
        try{
            File file = new File(fname);
            Scanner scanner = new Scanner(file);
            // 开始使用Scanner读取文件内容
            while (scanner.hasNextLine()) {
                String line = scanner.nextLine();
                if(scanner.hasNextLine()) {
                    System.out.println(line);
                }else {
                    System.out.print(line);
                }
            }
            scanner.close();
        } catch (FileNotFoundException e) {
            System.out.println("ERROR - File "+fname+" not found!");
        }
    }
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter a filename: ");
        String file_name = sc.nextLine();
        displayFile(file_name);
    }
}
