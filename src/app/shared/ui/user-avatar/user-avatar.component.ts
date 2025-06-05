import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-user-avatar',
  imports: [],
  templateUrl: './user-avatar.component.html',
  styleUrl: './user-avatar.component.scss'
})
export class UserAvatarComponent {
  @Input() avatarUrl: string = '/assets/images/avatar_1.jpg';
  @Input() size: number = 150;
}
