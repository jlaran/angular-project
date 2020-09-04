import { ClientService } from './../../../core/services/clients/clients.service';
import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NgForm } from '@angular/forms';
import { AuthenticationService } from 'src/app/core/services/authentication/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'e-workshop-new-car-modal',
  templateUrl: './new-car-modal.component.html',
  styleUrls: ['./new-car-modal.component.scss']
})
export class NewCarModalComponent implements OnInit {
  @Output()
  public readonly carCreated = new EventEmitter<boolean>();

  constructor(
    private readonly modalService: NgbModal,
    private readonly clientService: ClientService,
    private readonly toastrService: ToastrService,
    private readonly authenticationService: AuthenticationService,
    private readonly router: Router
  ) { }

  ngOnInit(): void {
  }

  public onCloseModal(): void {
    this.closeModal();
  }

  public onSubmit(newCarForm: NgForm): void {
    if (newCarForm.valid){
      this.clientService.addCar(newCarForm.value)
        .then(() => {
          this.toastrService.success('Car added!');
          this.carCreated.emit(true);
          this.closeModal();
          this.router.navigateByUrl('/client/dashboard');
        })
        .catch((error) => {
          this.toastrService.error(error.error.details[0].message);
          return;
        });
    } else {
      this.toastrService.error('The form contains errors');
    }
  }

  public closeModal(): void {
    this.modalService.dismissAll();
  }
}
