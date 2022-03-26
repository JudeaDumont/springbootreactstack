package com.example.demo.controllers;

import com.example.demo.models.SomeObject;
import com.example.demo.services.SomeObjectService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.io.Serializable;
import java.util.List;


@RestController
public class SomeObjectRestController {

    @Autowired
    private SomeObjectService someObjectService;

    @CrossOrigin(origins = { "http://localhost:3000", "http://localhost:4200" })
    @GetMapping("/{name}/getObjectsByName")
    public List<SomeObject> getObjectsByName(@PathVariable String name) {
        return someObjectService.getObjectsByName(name);
    }

    @CrossOrigin(origins = { "http://localhost:3000", "http://localhost:4200" })
    @GetMapping("/getAllObjects")
    public List<SomeObject> getAllObjects() {
        return someObjectService.getAllObjects();
    }

    @CrossOrigin(origins = { "http://localhost:3000", "http://localhost:4200" })
    @PostMapping("/saveObject")
    public void saveObject(@RequestBody SomeObject object) {
        someObjectService.saveObject(object);
    }
}
