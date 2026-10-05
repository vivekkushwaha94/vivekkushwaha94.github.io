import {
  Component,
  ElementRef,
  ViewChild
} from '@angular/core';

@Component({
  selector: 'app-dowloalresume',
  standalone: true,
  imports: [],
  templateUrl: './dowloalresume.html',
  styleUrl: './dowloalresume.css'
})
export class Dowloalresume {

  @ViewChild('resumeContainer', { static: false })
  resumeContainer!: ElementRef<HTMLElement>;

  async exportPDF(): Promise<void> {

    // Run only in browser
    if (typeof window === 'undefined') {
      return;
    }

    const element = this.resumeContainer?.nativeElement;

    if (!element) {
      console.error('Resume container not found.');
      return;
    }

    try {

      // Dynamically load html2pdf
      const html2pdfModule = await import('html2pdf.js');

      const html2pdf = html2pdfModule.default;

      
      await html2pdf()
       
        .from(element)
        .save();

    } catch (error) {

      console.error('PDF generation failed:', error);

    }
  }
}