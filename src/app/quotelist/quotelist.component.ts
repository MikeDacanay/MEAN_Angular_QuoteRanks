import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';

@Component({
	selector: 'app-quotelist',
	templateUrl: './quotelist.component.html',
	styleUrls: ['./quotelist.component.css']
})
export class QuotelistComponent implements OnInit {
	@Input() passDown_1;
	@Output() deleteEventEmitter = new EventEmitter();
	toro = 'Quote List';
	constructor() { }

	ngOnInit() {
	}

	triggerdelete(val){
		this.deleteEventEmitter.emit(val);
	}
}
