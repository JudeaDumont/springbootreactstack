package com.example.demo.services;

import com.example.demo.database.DatabaseConnecter;
import com.example.demo.models.SomeObject;
import org.hibernate.Session;
import org.hibernate.Transaction;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;

import java.util.List;

//This service should be talking to a database,
// //right now we are just trying to connect to react
@Service
@SuppressWarnings("unchecked")
public class SomeObjectService {
    public List<SomeObject> getObjectsByName(@PathVariable String name){
        return (List<SomeObject>) DatabaseConnecter
                .getSessionFactory()
                .openSession()
                .createQuery("SELECT o FROM SomeObject o where o.name=:name")
                .setParameter("name", name)
                .list();
    }
    public List<SomeObject> getAllObjects(){
        return DatabaseConnecter.getSessionFactory().openSession().createQuery("FROM SomeObject").list();
    }
    public void saveObject(SomeObject object) {
        Session session = DatabaseConnecter.getSessionFactory().openSession();
        Transaction tx = session.beginTransaction();
        session.saveOrUpdate(object);
        tx.commit();
    }

    public void deleteObject(Long id) {
        SomeObject object = new SomeObject(id,"");
        Session session = DatabaseConnecter.getSessionFactory().openSession();
        Transaction tx = session.beginTransaction();
        session.delete(object);
        tx.commit();
    }
}
