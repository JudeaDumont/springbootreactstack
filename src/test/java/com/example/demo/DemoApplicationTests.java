package com.example.demo;

import com.example.demo.database.DatabaseConnecter;
import com.example.demo.models.SomeObject;
import org.hibernate.Session;
import org.hibernate.Transaction;
import org.junit.jupiter.api.MethodOrderer;
import org.junit.jupiter.api.Order;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.TestMethodOrder;
import org.springframework.boot.test.context.SpringBootTest;

@SpringBootTest
@TestMethodOrder(MethodOrderer.OrderAnnotation.class)
class DemoApplicationTests {

	@Test
	@Order(1)
	void saveObject1() {
		SomeObject so = new SomeObject(12L, "Man");
		Session session = DatabaseConnecter.getSessionFactory().openSession();
		Transaction tx = session.beginTransaction();
		session.save(so);
		tx.commit();
	}

	@Test
	@Order(2)
	void runQuery() {
		DatabaseConnecter.getSessionFactory().openSession().createQuery("FROM SomeObject").list();
	}

	@Test
	@Order(3)
	void saveObject2() {
		SomeObject so = new SomeObject(15L, "DEEZ");
		Session session = DatabaseConnecter.getSessionFactory().openSession();
		Transaction tx = session.beginTransaction();
		session.save(so);
		tx.commit();
	}

	@Test
	@Order(4)
	void deleteObject() {
		SomeObject so = new SomeObject(15L, "DEEZ");
		Session session = DatabaseConnecter.getSessionFactory().openSession();
		Transaction tx = session.beginTransaction();
		session.delete(so);
		tx.commit();
	}

	@Test
	@Order(5)
	void getDeletedObject() {
		Session session = DatabaseConnecter.getSessionFactory().openSession();
		Transaction tx = session.beginTransaction();
		SomeObject shouldBeNull = session.get(SomeObject.class, 15L);
		tx.commit();
		assert shouldBeNull == null;
	}


	@Test
	@Order(6)
	void getObject() {
		Session session = DatabaseConnecter.getSessionFactory().openSession();
		Transaction tx = session.beginTransaction();
		SomeObject shouldBeNull = session.get(SomeObject.class, 12L);
		tx.commit();
		assert shouldBeNull != null;
	}
}
