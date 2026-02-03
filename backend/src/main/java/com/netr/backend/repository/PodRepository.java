package com.netr.backend.repository;

import com.netr.backend.entity.Pod;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PodRepository extends JpaRepository<Pod, Integer> {
}
