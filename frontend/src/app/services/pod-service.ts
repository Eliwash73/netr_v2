import { Injectable } from '@angular/core';
import { PodData } from '../interfaces/pod-data';
import { BehaviorSubject, } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { JwtTokenStorage } from './jwt-token-storage';

@Injectable({
  providedIn: 'root',
})
export class PodService {
  private podSubject = new BehaviorSubject<PodData>(
    { podID: 0, podName: 'Default Pod', color: '#44dd90' }
  );
  private podListSubject = new BehaviorSubject<PodData[]>([]);

  private baseURL = 'http://localhost:8080';

  constructor(private httpClient: HttpClient, private tokenStorage: JwtTokenStorage) {}

  getPodSubject() {
    return this.podSubject;
  }

  veiewPod(podID: number) {
    this.httpClient.get<PodData>(`${this.baseURL}/pod/${podID}`).subscribe({
      next: (podData) => {
        this.podSubject.next(podData);
      },
      error: (error) => {
        console.error('Error fetching pod data:', error);
      },
    });
  }
}