import { Component, inject, Signal, signal, WritableSignal } from '@angular/core';
import { PodSubscriber } from '../../classes/pod-subscriber';
import { PodItem } from '../pod-item/pod-item';
import { PodService } from '../../services/pod-service';
import { PodData } from '../../interfaces/pod-data';

@Component({
  selector: 'app-pod',
  imports: [],
  templateUrl: './pod.html',
  styleUrl: './pod.css',
})
export class Pod extends PodSubscriber {
  podItems = signal<PodItem[]>([]);

  // Dependency injection of services 
  private podService = inject(PodService); 

  // vars
  pod!: PodData;
  podID: number = 0;
  podColor: Signal<string> = signal('Green');
  podName: WritableSignal<string> = signal('Component Pod');

    // This will hold the PodItem currently being hovered
  hoveredPodItem: PodItem | null = null;
  // This will hold the PodItem that was just clicked on
  selectedPodItem: WritableSignal<PodItem | null> = signal(null);

}
