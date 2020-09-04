import { ClientServiceService } from './../../../core/data-service/clients/client-service.service';
import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'e-workshop-new-client-modal',
  templateUrl: './new-client-modal.component.html',
  styleUrls: ['./new-client-modal.component.scss']
})
export class NewClientModalComponent implements OnInit {
  @Output()
  public readonly clientCreated = new EventEmitter<boolean>();

  constructor(
    private modalService: NgbModal,
    private clientService: ClientServiceService,
    private toastr: ToastrService
  ) { }

  ngOnInit(): void {
  }

  public onCloseModal(): void {
    this.closeModal();
  }

  public onSubmit(clientForm: NgForm): void {
    if (!clientForm.valid){
      this.toastr.error('Please fill the form');
    } else {
      this.clientService.addClient(clientForm.value).subscribe(() => {
        this.toastr.success('Client Created');
        this.clientCreated.emit(true);
        this.closeModal();
      });
    }
  }

  public closeModal(): void {
    this.modalService.dismissAll();
  }
}
