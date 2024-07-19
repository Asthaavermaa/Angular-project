import { Injectable } from '@angular/core';

export interface User {
  name: string;
  workoutMinutes: number;
  workoutType: string;
}

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private userData: User[] = [
    { name: 'Aastha', workoutMinutes: 30, workoutType: 'Cardio' },
    { name: 'Aman', workoutMinutes: 45, workoutType: 'Strength' },
    { name: 'ayra', workoutMinutes: 20, workoutType: 'Cardio' },
    { name: 'ashish', workoutMinutes: 20, workoutType: 'running' },
    { name: 'divyansh', workoutMinutes: 20, workoutType: 'cycling' }
  ];

  constructor() { }

  getUserData() {
    return this.userData;
  }

  saveUserData(data: User) {
    this.userData.push(data);
  }

  searchByName(name: string): User[] {
    return this.userData.filter(user => user.name.toLowerCase().includes(name.toLowerCase()));
  }

  filterByWorkoutType(type: string): User[] {
    return this.userData.filter(user => user.workoutType.toLowerCase() === type.toLowerCase());
  }
}
