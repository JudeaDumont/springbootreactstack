package com.example.demo;

import com.example.demo.database.DatabaseConnecter;
import com.example.demo.database.H2DBConnection;
import com.example.demo.models.SomeObject;
import org.hibernate.Session;
import org.hibernate.Transaction;
import org.hibernate.query.Query;
import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.List;

@SpringBootTest
class DemoApplicationTests {

	@Test
	@SuppressWarnings("unchecked")
	void contextLoads() {
		SomeObject so = new SomeObject(12L, "Man");
		Session session = DatabaseConnecter.getSessionFactory().openSession();
		Transaction tx = session.beginTransaction();
		session.save(so);
		tx.commit();
		Query<SomeObject> query = DatabaseConnecter.getSessionFactory().openSession().createQuery("FROM SomeObject");
		List<SomeObject> results = query.list();
		System.out.print(results.toString());
		DatabaseConnecter.shutdown();
	}

}
