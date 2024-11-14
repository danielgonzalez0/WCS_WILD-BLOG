import { Component } from '@angular/core';
import { Article } from '../../models/article.model';
import { DatePipe } from '@angular/common';
import { LikeComponent } from '../ui/like/like.component';

@Component({
  selector: 'app-article-list',
  standalone: true,
  imports: [DatePipe, LikeComponent],
  templateUrl: './article-list.component.html',
  styleUrl: './article-list.component.scss',
})
export class ArticleListComponent {
  public isArticleLiked: boolean = false;
  article: Article = {
    title: 'lorem sit amet, consectetur adipiscing elit.',
    content:
      "Voici le contenu de l'article. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus feugiat, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus feugiat,",
    image:
      'https://cdn.pixabay.com/photo/2015/01/09/11/08/startup-594090_1280.jpg',
    // image: 'https://placehold.co/150x150',
    createdAt: new Date(),
    isPublished: false,
    likeCount: 1,
    categoryName: 'Angular',
  };

  onLikeChange(liked: boolean): void {
    this.isArticleLiked = liked;
    this.updateLikeCount();
  }

  updateLikeCount(): void {
    if (this.isArticleLiked) {
      this.article.likeCount++;
    } else {
      this.article.likeCount--;
    }
  }
}
