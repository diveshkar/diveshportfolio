import { Component, ElementRef, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-home-section',
  templateUrl: './home-section.component.html',
  styleUrl: './home-section.component.css'
})
export class HomeSectionComponent {
  constructor(private el: ElementRef, private renderer: Renderer2) {}

  scroll() {
    // You can adjust the scroll behavior based on your requirements
    const yOffset = 700;
    window.scrollTo({ top: yOffset, behavior: 'smooth' });
  }
}
