import { Component, inject, signal } from '@angular/core';
import { PodSubscriber } from '../../classes/pod-subscriber';
import { PodItem } from '../pod-item/pod-item';
import { PodService } from '../../services/pod-service';

@Component({
  selector: 'app-pod',
  imports: [],
  templateUrl: './pod.html',
  styleUrl: './pod.css',
})
export class Pod extends PodSubscriber {
  items = signal<PodItem[]>([]);

  // Dependency injection of services 
  private podService = inject(PodService); 
}
