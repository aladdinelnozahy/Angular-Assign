import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[productCard]'
})
export class ProductCardDirective {


  @Input('productCard') BackgroundColor:string="yellow"
  @Input('productCard')  BackgroundColor2:string="blue"
  constructor(private elem:ElementRef) {
    elem.nativeElement.style.borderRadius=`20px `
  }
  @HostListener('mouseover') onMouseover(){
    this.elem.nativeElement.style.boxShadow=` 10px 10px 50px 10px ${this.BackgroundColor} `
  }
  @HostListener('mouseout') onMouseout(){
    this.elem.nativeElement.style.boxShadow=` 0px 0px 0px 0px ${this.BackgroundColor2}`
  }
  // @HostListener('click') onClick(){
  //   this.elem.nativeElement.style.backgroundColor=` ${this.BackgroundColor}`
  // }
  // @HostListener('dblclick') ondblClick(){
  //   this.elem.nativeElement.style.backgroundColor=` ${this.BackgroundColor2}`
  // }
}
