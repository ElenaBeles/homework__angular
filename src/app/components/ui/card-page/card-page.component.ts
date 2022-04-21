import { Component, Input } from '@angular/core';

@Component({
	selector: 'app-card-page',
	templateUrl: './card-page.component.html',
	styleUrls: ['./card-page.component.sass']
})
export class CardPageComponent{
	@Input() title: string = '';
	@Input() subtitle: string = '';
	@Input() img: string = '';
}
