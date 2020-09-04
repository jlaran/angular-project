import { User } from './../../../shared/models/user.model';
import { UsersServiceService } from './../../../core/data-service/users/users-service.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'e-workshop-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent implements OnInit {
  public user: User;

  constructor(
    private userService: UsersServiceService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const userId = this.route.snapshot.params;
    this.userService.getUser(userId.id).subscribe(
      (result: User) => {
        // console.log(result);
        this.user = result;
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
