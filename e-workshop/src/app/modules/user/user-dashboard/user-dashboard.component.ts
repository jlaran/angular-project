import { EventsHubService } from './../../../core/services/events-hub/events-hub.service';
import { LocalStorageService } from 'src/app/core/services/local-storage/local-storage.service';
import { Component, OnInit } from '@angular/core';
import { NewUserModalComponent } from './../new-user-modal/new-user-modal.component';
import { User } from './../../../shared/models/user.model';
import { UsersServiceService } from './../../../core/data-service/users/users-service.service';
import { ToastrService } from 'ngx-toastr';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AuthenticationService } from 'src/app/core/services/authentication/authentication.service';

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
    private toastr: ToastrService,
    public local: LocalStorageService,
    public eventService: EventsHubService,
    public authenticationService: AuthenticationService
  ) { }

  ngOnInit(): void {
    this.eventService.setAdminLoggedIn(this.local.get('authData').admin);
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
