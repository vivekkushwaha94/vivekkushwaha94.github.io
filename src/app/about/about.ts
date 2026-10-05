import { Component, OnInit  } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-about',
  imports: [],
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class About {
  constructor( private router: Router ) { }

  ngOnInit() {}

   action(): void {
    this.router.navigate(['/Contact']);
   }
}
