import { Component } from '@angular/core';
import { GitService } from 'src/services/git.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Fullstack Madman💀☠';
  projects: Array<any> = [];
  errorMessage: string = '';
  constructor(private gitService: GitService) {}

  ngOnInit(): void {
    this.getRepos();
  }
  getRepos() {
    this.gitService.getRepos().subscribe({
      next: (data) => {
        this.projects = data;
        console.log(data);
      },
      error: (error) => {
        this.errorMessage = 'Error fetching projects';
        console.log(error);
      },
    });
  }

  toggleMobileMenu(){
    console.log("Open Mobile menu yeah yeah")
  }
}
