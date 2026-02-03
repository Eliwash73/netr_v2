package com.netr.backend.entity;

import jakarta.persistence.*;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@Entity
@Table(name = "pods")
public class Pod {

    @Id
    @Column(name = "pod_id", nullable = false)
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int podId;
    @Column(name = "pod_name", nullable = false,length = 100)
    private String podName;
}
