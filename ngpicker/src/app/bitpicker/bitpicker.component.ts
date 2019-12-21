import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bitpicker',
  templateUrl: './bitpicker.component.html',
  styleUrls: ['./bitpicker.component.css']
})
export class BitpickerComponent implements OnInit {

  public listArr: any[];

  constructor() {
    this.listArr = [
      {
        id: 0,
        title: 'Local.1.0:Pt01',
        type: 'SINT'
      },
      {
        id: 1,
        title: 'Local.1.0:Pt02',
        type: 'DINT'
      }
    ]
  }

  ngOnInit() {

  }

  openDialog() { }
}
