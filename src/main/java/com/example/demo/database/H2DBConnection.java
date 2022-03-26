package com.example.demo.database;

import java.sql.*;

public class H2DBConnection {
    // JDBC driver name and database URL
    static final String JDBC_DRIVER = "org.h2.Driver";
    static final String DB_URL = "jdbc:h2:mem:testdb";

    //  Database credentials
    static final String USER = "sa";
    static final String PASS = "password";

    static Connection conn = null;
    static Statement stmt = null;

    static {
        try {
            // STEP 1: Register JDBC driver
            Class.forName(JDBC_DRIVER);

            //STEP 2: Open a connection
            System.out.println("Connecting to database...");
            conn = DriverManager.getConnection(DB_URL, USER, PASS);

            //STEP 3: Execute a query
            System.out.println("query the nuts...");
            stmt = conn.createStatement();
            String sql = "SELECT * FROM chair; ";
            ResultSet resultSet = stmt.executeQuery(sql);
            System.out.println("Queried Chair...");

            while(resultSet.next())
            {
                System.out.println(resultSet.getString(1)+ " - " +resultSet.getString(2)); //or rs.getString("column name");
            }

            // STEP 4: Clean-up environment
            stmt.close();
            conn.close();
        } catch (
                Exception se) {
            //Handle errors for JDBC
            se.printStackTrace();
        }//Handle errors for Class.forName
        finally {
            //finally, block used to close resources
            try {
                if (stmt != null) stmt.close();
            } catch (SQLException ignored) {
            } // nothing we can do
            try {
                if (conn != null) conn.close();
            } catch (SQLException se) {
                se.printStackTrace();
            } //end finally try
        } //end try
    }
}
