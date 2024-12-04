import {Component, inject} from '@angular/core';
import {KENDO_TIMELINE} from "@progress/kendo-angular-layout";
import {toSignal} from "@angular/core/rxjs-interop";
import {GithubService} from "./services/github.service";
import {DatePipe} from "@angular/common";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [KENDO_TIMELINE, DatePipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'github-timeline';
  githubService = inject(GithubService);
  public commits$ = toSignal(this.githubService.getCommits('alyssamichelle', 'tour-of-ponies'),
    {
      initialValue: []
    });

}
