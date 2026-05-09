import { Component } from '@angular/core';
import { Pod } from "../pod/pod";

@Component({
  selector: 'app-home-page',
  imports: [Pod],
  templateUrl: './home-page.html',
  styleUrl: './home-page.css',
})
export class HomePage {

}
