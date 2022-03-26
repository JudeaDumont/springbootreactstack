package com.example.demo.controllers;

import com.example.demo.models.SomeObject;
import com.example.demo.services.SomeObjectService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;


@RestController
public class SomeObjectRestController {

    @Autowired
    private SomeObjectService someObjectService;

//    @CrossOrigin(origins = { "http://localhost:3000", "http://localhost:4200" })
//    @GetMapping("/{name}/getmeobjects")
//    public List<SomeObject> getObjectsByName(@PathVariable String name) {
//        return someObjectService.findAll();
//    }


    @CrossOrigin(origins = { "http://localhost:3000", "http://localhost:4200" })
    @GetMapping("/{name}/getmeobjects")
    public List<SomeObject> getAllObjects(@PathVariable String name) {
        return someObjectService.findAll();
    }
}
