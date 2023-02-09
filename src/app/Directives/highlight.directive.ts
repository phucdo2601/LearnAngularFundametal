import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective implements OnInit {
  @Input() appHighlight = 'red';

  constructor(private el: ElementRef) {
    console.log("Constructor HighlightDirective", this.appHighlight);
    el.nativeElement.style.color = this.appHighlight;
   }
  ngOnInit(): void {
    console.log("ngOnInint HighlightDirective", this.appHighlight);
    this.el.nativeElement.style.color = this.appHighlight;
  }

}
