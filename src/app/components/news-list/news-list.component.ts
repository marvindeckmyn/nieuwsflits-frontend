import { Component, OnInit } from '@angular/core';
import { NewsService } from '../../services/news.service';
import { NewsArticle } from '../../models/news-article.model';

@Component({
    selector: 'app-news-list',
    templateUrl: './news-list.component.html',
    styleUrls: ['./news-list.component.scss']
})
export class NewsListComponent implements OnInit {
    articles: NewsArticle[] = [];
    loading = false;
    error: string | null = null;

    constructor(private newsService: NewsService) { }

    ngOnInit(): void {
        this.loadLatestNews();
    }

    loadLatestNews(): void {
        this.loading = true;
        this.newsService.getLatestNews()
            .subscribe({
                next: (articles) => {
                    this.articles = articles;
                    this.loading = false;
                },
                error: (error) => {
                    this.error = 'Failed to load news articles';
                    this.loading = false;
                    console.error('Error loading news:', error);
                }
            });
    }
}