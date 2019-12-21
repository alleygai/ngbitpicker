import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class BitpickerService {
    ifShow = false;
    ifShow$ = new BehaviorSubject<boolean>(this.ifShow);

    bitArr: any[] = [];
    bitArr$ = new BehaviorSubject<string[]>(this.bitArr);

    bit: number | string = '';
    bit$ = new BehaviorSubject<number | string>(this.bit);

    showBitpicker(ifShow: boolean, type: string) {
        this.ifShow = ifShow;
        this.ifShow$.next(this.ifShow);
        const length = type === 'SINT' ? 8 : 32;
        this.bitArr = [];
        for (let i = 0; i < length; i++) {
            this.bitArr.push(i);
        }
        this.bitArr$.next(this.bitArr);
    }
    setBit(bit) {
        this.bit = bit;
        this.bit$.next(this.bit);
        this.ifShow = false;
        this.ifShow$.next(this.ifShow);
    }
    constructor() { }
}
