package com.example.demo;

import com.example.demo.database.DatabaseConnecter;
import com.example.demo.models.SomeObject;
import org.hibernate.Session;
import org.hibernate.Transaction;
import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;

@SpringBootTest
class DemoApplicationTests {

	@Test
	void SaveObject() {
		SomeObject so = new SomeObject(12L, "Man");
		Session session = DatabaseConnecter.getSessionFactory().openSession();
		Transaction tx = session.beginTransaction();
		session.save(so);
		tx.commit();
	}

	@Test
	void RunQuery() {
		DatabaseConnecter.getSessionFactory().openSession().createQuery("FROM SomeObject").list();
	}
}
