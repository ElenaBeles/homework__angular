import {Component, ChangeDetectionStrategy, Input} from '@angular/core';

@Component({
	selector: 'app-icon',
	templateUrl: './icon.component.html',
	styleUrls: ['./icon.component.sass'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class IconComponent {
	@Input() name: string = '';
	@Input() size: string = '24px';
}
