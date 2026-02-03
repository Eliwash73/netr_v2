package com.netr.backend.controller;

import com.netr.backend.entity.Pod;
import com.netr.backend.service.PodService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/pod")
public class PodController {
    PodService podService;

    public PodController(PodService podService){
        this.podService = podService;
    }

    @GetMapping()
    public List<Pod> getPods(){
        return podService.getAllPods();
    }
}
