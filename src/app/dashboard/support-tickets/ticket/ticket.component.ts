import { Component, input, output, signal } from '@angular/core';
import { Ticket } from '../ticket.model';

@Component({
  selector: 'app-ticket',
  standalone: true,
  imports: [],
  templateUrl: './ticket.component.html',
  styleUrl: './ticket.component.css',
})
export class TicketComponent {
  data = input.required<Ticket>();

  detailsVisable = signal(false);

  // isCompleted: boolean = false;

  close = output();

  onToggleDetails() {
    this.detailsVisable.set(!this.detailsVisable());
  }

  // onCompleteTask() {
  //   this.isCompleted = !this.isCompleted;
  // }

  // onCompleteTask() {
  //  this.close.emit()
  // }

  onCompleteTask() {
    this.close.emit();
  }
}
