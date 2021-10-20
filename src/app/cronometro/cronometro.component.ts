import { Component, Input,Output, OnInit, EventEmitter } from '@angular/core';
//import { EventEmitter } from 'stream';

@Component({
  selector: 'app-cronometro',
  templateUrl: './cronometro.component.html',
  styleUrls: ['./cronometro.component.css']
})
export class CronometroComponent implements OnInit {
  segundo:any;
  @Input() inicio: any;
  @Output() multiplo10 = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
    this.segundo= this.inicio;
    setInterval( () =>{
      this.segundo ++;
      if(this.segundo % 10 == 0){
        this,this.multiplo10.emit(this.segundo);
      }
    },1000)
  }

}
