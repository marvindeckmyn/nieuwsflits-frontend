import { RouterModule, Routes } from '@angular/router';
import { NewsListComponent } from './components/news-list/news-list.component';
import { NgModule } from '@angular/core';

const routes: Routes = [
    { path: '', redirectTo: '/news', pathMatch: 'full' },
    { path: 'news', component: NewsListComponent },
    { path: 'article/:id', component: ArticleDetailComponent },
    { path: 'category/:category', component: NewsListComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }