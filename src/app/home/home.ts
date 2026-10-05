import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
constructor( private router: Router ) { }

  ngOnInit() {}

   about(): void {
    this.router.navigate(['/About']);
   }

   viewmywork(): void {
    this.router.navigate(['/Viewmywork']);
   }  
   downloadResume(): void {
    this.router.navigate(['/Dowloalresume']);
   }
}

