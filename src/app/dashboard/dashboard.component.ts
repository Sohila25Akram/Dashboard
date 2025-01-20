import { Component } from '@angular/core';
import { ServerStatusComponent } from './server-status/server-status.component';
import { TrafficComponent } from './traffic/traffic.component';
import { SupportTicketsComponent } from './support-tickets/support-tickets.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [ServerStatusComponent, TrafficComponent, SupportTicketsComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
})
export class DashboardComponent {}
