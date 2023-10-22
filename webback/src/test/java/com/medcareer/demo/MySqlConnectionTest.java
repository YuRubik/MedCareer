package com.medcareer.demo;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;

public class MySqlConnectionTest {
    public static void main(String[] args) {
        String url = "jdbc:mysql://localhost:3306/springboot";
        String username = "root";
        String password = "20030128liu";

        try {
            Connection connection = DriverManager.getConnection(url, username, password);
            System.out.println("Connected to MySQL!");
            // You can execute queries or perform database operations here.
            connection.close();
        } catch (SQLException e) {
            System.err.println("Connection to MySQL failed: " + e.getMessage());
        }
    }
}
