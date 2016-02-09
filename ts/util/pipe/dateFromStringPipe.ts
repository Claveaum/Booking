import {Pipe,PipeTransform} from 'angular2/core';
import {DatePipe} from 'angular2/common';

/**
 * Transform an ISO-8601 String into a displayable date 
 */
@Pipe({
    name: 'dateFromString'
})
export class DateFromStringPipe implements PipeTransform {
    private datePipe: DatePipe;
          
    transform(value: string, args: any[]) : any {
        return this.datePipe.transform(Date.parse(value), args);
    }
    
    constructor() {
        this.datePipe = new DatePipe();
    }
}