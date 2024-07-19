import { Component, OnInit } from '@angular/core';
import { UserService, User } from '../user.service';


@Component({
  selector: 'app-user-input',
  templateUrl: './user-input.component.html',
  styleUrls: ['./user-input.component.css']
})
export class UserInputComponent implements OnInit {
  userData: User[] = [];
  filteredData: User[] = [];
  newUser: User = { name: '', workoutMinutes: 0, workoutType: '' };
  searchName: string = '';
  filterType: string = '';
  currentPage: number = 1;
  itemsPerPage: number = 2;
  applyFilters: any;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userData = this.userService.getUserData();
    this.filteredData = [...this.userData];
  }

  saveData(): void {
    this.userService.saveUserData(this.newUser);
    this.newUser = { name: '', workoutMinutes: 0, workoutType: '' };
    this.applyFilters();
  }


  }

