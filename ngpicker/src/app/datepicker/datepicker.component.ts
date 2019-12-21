import { Component, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

export interface DialogData {
  choosetime: string;
  choosedate: string;
  name: string;
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

  constructor(public dialog: MatDialog) { }

  openDialog(): void {
    const dialogRef = this.dialog.open(DatepickerComponentDialog, {
      width: '700px',
      data: { name: this.name, choosetime: this.choosetime, choosedate: this.choosedate }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.choosetime = result.choosetime;
      this.choosedate = result.choosedate;
    });
  }

}

@Component({
  selector: 'app-dialog-overview-example-dialog',
  templateUrl: 'datepicker-dialog.component.html',
  styleUrls: ['datepicker-dialog.component.css']
})
// tslint:disable-next-line: component-class-suffix
export class DatepickerComponentDialog {

  constructor(
    public dialogRef: MatDialogRef<DatepickerComponentDialog>,
    @Inject(MAT_DIALOG_DATA) public inputdata: DialogData) { }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
