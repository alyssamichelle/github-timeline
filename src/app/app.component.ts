import {Component, inject} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {KENDO_TIMELINE} from '@progress/kendo-angular-layout';
import {GithubService} from './services/github.service';
import {DatePipe} from "@angular/common";
import {toSignal} from "@angular/core/rxjs-interop";

@Component({
    selector: 'app-root',
    imports: [RouterOutlet, KENDO_TIMELINE, DatePipe],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss'
})
export class AppComponent {
    githubService = inject(GithubService);
    public commits$ = toSignal(this.githubService.getCommits('alyssamichelle', 'tour-of-ponies'));
}
