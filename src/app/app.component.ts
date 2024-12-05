import {Component, inject} from '@angular/core';
import {KENDO_TIMELINE} from '@progress/kendo-angular-layout';
import {GithubService} from './services/github.service';
import {toSignal} from "@angular/core/rxjs-interop";

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [KENDO_TIMELINE],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss'
})
export class AppComponent {
    githubService = inject(GithubService);
    public commits$ = toSignal(this.githubService.getCommits('alyssamichelle', 'tour-of-ponies'),{
      initialValue: []
    });
}
