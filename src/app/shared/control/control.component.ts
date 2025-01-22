import {
  Component,
  ContentChild,
  ElementRef,
  inject,
  Input,
} from '@angular/core';

@Component({
  selector: 'app-control',
  standalone: true,
  imports: [],
  templateUrl: './control.component.html',
  styleUrl: './control.component.css',
  host: { '(click)': 'onClick()' },
})
export class ControlComponent {
  @Input() label!: string;
  private el = inject(ElementRef);
  @ContentChild('input') private ourInput?: ElementRef<
    HTMLInputElement | HTMLTextAreaElement
  >;

  // onNgInit() {
  //   console.log(this.el);
  //   console.log('our input value: ', this.ourInput?.nativeElement.value);
  // }

  onClick() {
    console.log(this.el);
    console.log('our input value: ', this.ourInput);
  }
}
