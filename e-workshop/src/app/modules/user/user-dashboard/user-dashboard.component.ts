import { User } from './../../../shared/models/user.model';
import { UsersServiceService } from './../../../core/data-service/users/users-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.scss']
})
export class UserDashboardComponent implements OnInit {
  public users: User[];

  constructor(private readonly userService: UsersServiceService) { }

  ngOnInit(): void {
    this.getUsers();
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
    )
  }

}
