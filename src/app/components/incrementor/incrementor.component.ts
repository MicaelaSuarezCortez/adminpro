import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';


@Component({
  selector: 'app-incrementor',
  templateUrl: './incrementor.component.html',
  styles: []
})
export class IncrementorComponent implements OnInit {

  @Input('name') progress: number = 50;
  @Input() legend: string = '';

  @Output() changeProgress: EventEmitter<number> = new EventEmitter();
  @ViewChild('inputProgress', {static: false}) inputProgress:ElementRef;

  

  constructor() { }

  ngOnInit(): void {
  }

  validateField(newValue: number){  
    
    if(newValue > 100) {
      this.progress = 100;
    } else if( newValue <= 0 || newValue === null ) {
      this.progress = 1;
    } else {
      this.progress = newValue;
    } 
    this.inputProgress.nativeElement.value = this.progress;
    
    this.changeProgress.emit(this.progress);
    // this.inputProgress.nativeElement.focus();
    console.log(this.progress);
  };

  changeValue(value: number) {
    const aux = this.progress + value;
    if (aux > 100 || aux < 5) {
      return;
    } else {
  
    this.progress = aux;
    this.changeProgress.emit(this.progress);
    }
    console.log(this.progress);
  }
}
