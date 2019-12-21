import { Component, OnInit, Input } from '@angular/core';
import { BitpickerService } from 'src/app/services/bitpicker.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css'],
  providers: [BitpickerService]
})
export class ItemComponent implements OnInit {
  @Input() item: any;

  public bit: number | string;
  constructor(private bpSvc: BitpickerService) {
  }

  ngOnInit() {
    this.bpSvc.bit$.subscribe(value => {
      this.bit = value;
    });
  }
  showBitpicker() {
    this.bpSvc.showBitpicker(true, this.item.type);
  }
}
