import { Component, OnInit } from '@angular/core';
import { GitService } from 'src/services/git.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
})
export class ProjectsComponent implements OnInit {
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
}
