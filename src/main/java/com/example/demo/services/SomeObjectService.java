package com.example.demo.services;

import com.example.demo.models.SomeObject;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

//This service should be talking to a database,
// //right now we are just trying to connect to react
@Service
public class SomeObjectService {
    private static final List<SomeObject> someObjects = new ArrayList<>();
    private static long idCounter = 0;
    static{
        someObjects.add(new SomeObject(++idCounter, "cream"));
        someObjects.add(new SomeObject(++idCounter, "eggs"));
    }

    public List<SomeObject> findAll(){
        return someObjects;
    }
}
