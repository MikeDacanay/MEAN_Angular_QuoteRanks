import { Component, OnInit, Input } from '@angular/core';

@Component({
	selector: 'app-quotelist',
	templateUrl: './quotelist.component.html',
	styleUrls: ['./quotelist.component.css']
})
export class QuotelistComponent implements OnInit {
	@Input() passDown_1;
	toro = 'Quote List';
	constructor() { }

	ngOnInit() {
	}

}
