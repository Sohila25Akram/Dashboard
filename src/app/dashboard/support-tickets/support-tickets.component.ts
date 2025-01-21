import { Component, ViewEncapsulation } from '@angular/core';
import { DashboardCardComponent } from '../dashboard-card/dashboard-card.component';
import { NewTicketComponent } from './new-ticket/new-ticket.component';

@Component({
  selector: 'app-support-tickets',
  standalone: true,
  imports: [NewTicketComponent],
  templateUrl: './support-tickets.component.html',
  styleUrl: './support-tickets.component.css',
  encapsulation: ViewEncapsulation.None,
})
export class SupportTicketsComponent {}
