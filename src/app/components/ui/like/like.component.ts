import { Component, EventEmitter, Input, Output } from '@angular/core';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { faHeart as faHeartRegular } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-like',
  standalone: true,
  imports: [FontAwesomeModule, NgClass],
  templateUrl: './like.component.html',
  styleUrl: './like.component.scss',
})
export class LikeComponent {
  faHeart = faHeart;
  emptyHeart = faHeartRegular;
  liked = false;

  @Output() likeChange = new EventEmitter<boolean>();

  @Input() role: 'button' | 'span' = 'span';

  toggleLike() {
    this.liked = !this.liked;
    this.likeChange.emit(this.liked);
  }
}
