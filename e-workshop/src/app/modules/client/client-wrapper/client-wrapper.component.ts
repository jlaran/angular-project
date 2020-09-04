import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'e-workshop-client-wrapper',
  templateUrl: './client-wrapper.component.html',
  styleUrls: ['./client-wrapper.component.scss']
})
export class ClientWrapperComponent implements OnInit {

  constructor(
    private readonly router: Router
  ) { }

  ngOnInit(): void {
    this.router.navigate(['/client/dashboard']);
  }

}
