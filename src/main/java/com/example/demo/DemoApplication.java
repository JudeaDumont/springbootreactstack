package com.example.demo;

import com.example.demo.database.H2DBConnection;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class DemoApplication {

	public static void main(String[] args) {
		SpringApplication.run(DemoApplication.class, args);
		H2DBConnection h2 = new H2DBConnection();
	}

}
