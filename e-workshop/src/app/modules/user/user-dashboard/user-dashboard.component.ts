import { Component, OnInit } from '@angular/core';
import { NewUserModalComponent } from './../new-user-modal/new-user-modal.component';
import { User } from './../../../shared/models/user.model';
import { UsersServiceService } from './../../../core/data-service/users/users-service.service';
import { ToastrService } from 'ngx-toastr';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.scss']
})
export class UserDashboardComponent implements OnInit {
  public users: User[];

  constructor(
    private readonly userService: UsersServiceService,
    private modalService: NgbModal,
    private toastr: ToastrService
  ) { }

  ngOnInit(): void {
    this.getUsers();
  }

  onNewUserModal(): void {
    const modalRef = this.modalService.open(NewUserModalComponent, {
      size: 'md',
      centered: true,
    });

    modalRef.componentInstance.userCreated.subscribe(() => {
      this.getUsers();
    });
  }

  private getUsers(): void {
    this.userService.getUsers().subscribe(
      (result: User[]) => {
        this.users = result;
        // console.log(result);
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
