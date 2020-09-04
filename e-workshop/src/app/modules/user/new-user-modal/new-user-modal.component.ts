import { UsersServiceService } from './../../../core/data-service/users/users-service.service';
import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'e-workshop-new-user-modal',
  templateUrl: './new-user-modal.component.html',
  styleUrls: ['./new-user-modal.component.scss']
})
export class NewUserModalComponent implements OnInit {
  @Output()
  public readonly userCreated = new EventEmitter<boolean>();

  constructor(
    private modalService: NgbModal,
    private userService: UsersServiceService,
    private toastr: ToastrService
  ) { }

  ngOnInit(): void {
  }

  public onCloseModal(): void {
    this.closeModal();
  }

  public onSubmit(userForm: NgForm): void {
    if (!userForm.valid){
      this.toastr.error('Please fill the form');
    } else {
      this.userService.addUser(userForm.value).subscribe(() => {
        this.toastr.success('User Created');
        this.userCreated.emit(true);
        this.closeModal();
      });
    }
  }

  public closeModal(): void {
    this.modalService.dismissAll();
  }
}
