import { Component, ViewEncapsulation } from '@angular/core';
import { DashboardCardComponent } from '../dashboard-card/dashboard-card.component';
import { NewTicketComponent } from './new-ticket/new-ticket.component';
import { TicketComponent } from './ticket/ticket.component';
import { Ticket } from './ticket.model';

@Component({
  selector: 'app-support-tickets',
  standalone: true,
  imports: [NewTicketComponent, TicketComponent],
  templateUrl: './support-tickets.component.html',
  styleUrl: './support-tickets.component.css',
  encapsulation: ViewEncapsulation.None,
})
export class SupportTicketsComponent {
  tickets: Ticket[] = [];

  onAdd(ticketData: { title: string; request: string }) {
    const ticket: Ticket = {
      title: ticketData.title,
      request: ticketData.request,
      id: Math.random().toString(),
      status: 'open',
    };
    this.tickets.push(ticket);
  }

  onCompleteTask(id: string) {
    this.tickets = this.tickets.map((ticket) => {
      if (ticket.id === id) {
        return { ...ticket, status: 'closed' };
      }
      return ticket;
    });
  }
}
