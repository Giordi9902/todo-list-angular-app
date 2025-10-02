import { Component } from '@angular/core';
import { HeaderComponent } from './header/header';
import { DUMMY_USERS } from './dummy-users';
import { UserComponent } from './user/user';
import { Tasks } from './tasks/tasks';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.css',
  imports: [HeaderComponent, UserComponent, Tasks],
})
export class App {
  protected title = 'my-angular-app';
  users = DUMMY_USERS;
  selectedUserId?: string;

  get selectedUser() {
    return this.users.find((user) => user.id === this.selectedUserId)!;
  }

  onSelectUser(id: string) {
    this.selectedUserId = id;
  }
}
