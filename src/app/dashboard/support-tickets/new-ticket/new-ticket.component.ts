import { Component, ElementRef, ViewChild, viewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ControlComponent } from '../../../shared/control/control.component';
import { ButtonComponent } from '../../../shared/button/button.component';

@Component({
  selector: 'app-new-ticket',
  standalone: true,
  imports: [FormsModule, ControlComponent, ButtonComponent],
  templateUrl: './new-ticket.component.html',
  styleUrl: './new-ticket.component.css',
})
export class NewTicketComponent {
  @ViewChild('form') form?: ElementRef<HTMLFormElement>;
  onSubmit(inputOne: HTMLInputElement, inputTwo: HTMLTextAreaElement) {
    console.log('form dubmitted');
    console.log('title: ', inputOne.value);
    console.log('request: ', inputTwo.value);
    this.form?.nativeElement.reset();
  }
}
