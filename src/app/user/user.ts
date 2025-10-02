import {
  Component,
  Input,
  Output,
  EventEmitter
} from '@angular/core';

import {type User} from './user.model';
import { Card } from "../shared/card/card";

@Component({
  selector: 'app-user',
  imports: [Card],
  templateUrl: './user.html',
  styleUrl: './user.css',
})
export class UserComponent {
  @Input({ required: true }) user !: User;
  @Input() selected!: boolean;
  @Output() select = new EventEmitter();

  get imagePath() {
    return 'users/' + this.user.avatar;
  }
  //   imagePath = computed(() => 'users/' + this.avatar());
  onSelectUser() {
    this.select.emit(this.user.id);
  }
}
