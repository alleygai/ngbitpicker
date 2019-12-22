import { Component, Inject, AfterContentInit, AfterViewInit, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { NgbTimeStruct } from '@ng-bootstrap/ng-bootstrap';
import { debug } from 'util';

export interface DialogData {
  choosetime: string;
  choosedate: string;
  name: string;
  pickedtime: NgbTimeStruct;
}

/**
 * @title Dialog Overview
 */
@Component({
  selector: 'app-datepicker',
  templateUrl: 'datepicker.component.html',
  styleUrls: ['datepicker.component.css']
})
export class DatepickerComponent {

  choosetime: string;
  choosedate: string;
  name: string;
  pickedtime: NgbTimeStruct;

  constructor(public dialog: MatDialog) { }

  openDialog(): void {
    const dialogRef = this.dialog.open(DatepickerComponentDialog, {
      width: '800px',
      data: { name: this.name, choosetime: this.choosetime, choosedate: this.choosedate, pickedtime: { hour: 13, minute: 30, second: 30 } }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.choosedate = result.choosedate;
      this.pickedtime = result.pickedtime;
    });
  }

}

@Component({
  selector: 'app-dialog-overview-example-dialog',
  templateUrl: 'datepicker-dialog.component.html',
  styleUrls: ['datepicker-dialog.component.css']
})
// tslint:disable-next-line: component-class-suffix
export class DatepickerComponentDialog implements AfterViewInit {

  constructor(
    public dialogRef: MatDialogRef<DatepickerComponentDialog>,
    @Inject(MAT_DIALOG_DATA) public inputdata: DialogData) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngAfterViewInit(): void {
    const unusedelements = document.getElementsByClassName('sr-only');
    for (let i = 0; i < 6; i++) {
      unusedelements[0].remove();
    }
  }
}
