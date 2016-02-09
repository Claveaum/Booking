import {Component,EventEmitter,Input,Output} from 'angular2/core';
import {DateFromStringPipe} from '../../util/pipe/dateFromStringPipe';
import {FlightInterface} from '../../model/flightInterface';

/**
 * Flight view
 */
@Component({
    selector: 'flight',
    templateUrl: 'html/list-item/flight-list-item.component.html',
    events: ['selected'],
    pipes: [DateFromStringPipe]
})
export class FlightListItemComponent{
    /** Model */
    @Input() model: FlightInterface;
    
    /** Event triggered on selection */
    @Output() selected = new EventEmitter<FlightInterface>();
    
    /** Selection trigger */
    onSelection() {
        this.selected.emit(this.model);
    }
}