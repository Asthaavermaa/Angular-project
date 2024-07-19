import { Component } from '@angular/core';

import { UserService, User } from '../user.service';

@Component({
  selector: 'app-user-result',
  templateUrl: './user-result.component.html',
  styleUrls: ['./user-result.component.css']
})
export class UserResultComponent {
  userData: User[] = [];
  filteredData: User[] = [];
  searchName: string = '';
  filterType: string = '';
  currentPage: number = 1;
  itemsPerPage: number = 2;
 

  constructor(private userService: UserService) { }

  search(): void {
    this.applyFilters();
  }

  filter(): void {
    this.applyFilters();
  }

  applyFilters(): void {
    let data = this.userService.getUserData();
    if (this.searchName) {
      data = this.userService.searchByName(this.searchName);
    }
    if (this.filterType) {
      data = this.userService.filterByWorkoutType(this.filterType);
    }
    this.filteredData = data;
    this.currentPage = 1;
  }

  get paginatedData(): User[] {
    const start = (this.currentPage - 1) * this.itemsPerPage;
    const end = start + this.itemsPerPage;
    return this.filteredData.slice(start, end);
  }

  nextPage(): void {
    if (this.currentPage * this.itemsPerPage < this.filteredData.length) {
      this.currentPage++;
    }
  }

  previousPage(): void {
    if (this.currentPage > 1) {
      this.currentPage--;
    }
  }
}


