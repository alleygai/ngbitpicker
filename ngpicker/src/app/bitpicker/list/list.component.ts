import { Component, OnInit } from '@angular/core';
import { BitpickerService } from 'src/app/services/bitpicker.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  public ifShow = false;
  public bitArr: any[] = [];

  constructor(private bitSvc: BitpickerService) { }

  ngOnInit() {
    this.bitSvc.ifShow$.subscribe(value => {
      this.ifShow = value;
    });
    this.bitSvc.bitArr$.subscribe(value => {
      this.bitArr = value;
    });
  }
  setBit(bit: number) {
    this.bitSvc.setBit(bit);
  }
  onBitBlur() {
    debugger;
    this.ifShow = false;
  }
}
