import { Component, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'app-button-with-icon',
  templateUrl: './button-with-icon.component.html',
  styleUrls: ['./button-with-icon.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ButtonWithIconComponent{
	@Input() text!: string;
	@Input() icon!: string;
	@Input() size: string = '24px'
}
