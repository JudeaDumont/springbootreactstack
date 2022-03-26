package com.example.demo.services;

import com.example.demo.database.DatabaseConnecter;
import com.example.demo.models.SomeObject;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

import java.util.List;

//This service should be talking to a database,
// //right now we are just trying to connect to react
@Service
@SuppressWarnings("unchecked")
public class SomeObjectService {

    @CrossOrigin(origins = { "http://localhost:3000", "http://localhost:4200" })
    @GetMapping("/{name}/getObjectsByName")
    public List<SomeObject> getObjectsByName(@PathVariable String name){
        return (List<SomeObject>) DatabaseConnecter
                .getSessionFactory()
                .openSession()
                .createQuery("SELECT o FROM SomeObject o where o.name=:name")
                .setParameter("name", name)
                .list();
    }

    @CrossOrigin(origins = { "http://localhost:3000", "http://localhost:4200" })
    @GetMapping("/getAllObjects")
    public List<SomeObject> getAllObjects(){
        return DatabaseConnecter.getSessionFactory().openSession().createQuery("FROM SomeObject").list();
    }
}
