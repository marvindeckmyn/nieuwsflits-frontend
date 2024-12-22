import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { NewsArticle } from '../models/news-article.model';

@Injectable({
    providedIn: 'root'
})
export class NewsService {
    private apiUrl = 'https://api.nieuwsflits.be/api/news';

    constructor(private http: HttpClient) { }

    getLatestNews(): Observable<NewsArticle[]> {
        return this.http.get<NewsArticle[]>(`${this.apiUrl}/latest`);
    }

    getArticleById(id: number): Observable<NewsArticle> {
        return this.http.get<NewsArticle>(`${this.apiUrl}/${id}`);
    }

    getNewsByCategory(category: string): Observable<NewsArticle[]> {
        return this.http.get<NewsArticle[]>(`${this.apiUrl}/category/${category}`);
    }
}