import { Component } from '@angular/core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {
	quotes= {quote: "",
			 author: ""};
	list_to_copy= [];
	list_to_pass = [];

	title = 'Add a Quote';

	onSubmit(){
		this.list_to_pass = [];
		this.list_to_pass.push(this.quotes);
		if(this.list_to_copy.length>0){
			for(let i = 0;i<this.list_to_copy.length; i++){
				this.list_to_pass.push(this.list_to_copy[i])
			}
		}
		this.list_to_copy = this.list_to_pass;
		this.quotes = {
			quote:"",
			author: ""
		}
	}

	removeQuote(eventdata){
		console.log(eventdata);
	}
}
