import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'changeDatePipe' })
export class ChangeDatePipe implements PipeTransform {
    transform(date: Date | string): string {
        date = new Date(date);
        return date.toLocaleTimeString();
    }
}