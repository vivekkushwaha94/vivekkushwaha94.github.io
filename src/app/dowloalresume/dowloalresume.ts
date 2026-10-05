import { Component } from '@angular/core';

@Component({
  selector: 'app-dowloalresume',
  imports: [],
  templateUrl: './dowloalresume.html',
  styleUrl: './dowloalresume.css',
})
export class Dowloalresume {


  exportPDF(): void {
    window.print();
}

}
