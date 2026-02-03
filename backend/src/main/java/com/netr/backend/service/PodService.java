package com.netr.backend.service;

import com.netr.backend.entity.Pod;
import com.netr.backend.repository.PodRepository;
import jakarta.transaction.Transactional;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@Transactional
public class PodService {

    PodRepository podRepository;

    public PodService(PodRepository podRepository){
        this.podRepository = podRepository;
    }

    public List<Pod> getAllPods() {
        return podRepository.findAll();
    }
}
