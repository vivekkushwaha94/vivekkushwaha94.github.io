import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-viewmywork',
  imports: [],
  templateUrl: './viewmywork.html',
  styleUrl: './viewmywork.css',
})
export class Viewmywork {
   constructor( private router: Router ) { }

  ngOnInit() {}

openCompany: number | null = null;

  toggleCompany(companyId: number): void {

    if (this.openCompany === companyId) {
      this.openCompany = null;
    } else {
      this.openCompany = companyId;
    }

  }

   

   

}