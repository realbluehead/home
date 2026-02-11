import { Injectable, inject } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { signal } from "@angular/core";
import { Project } from "../models/project.interface";

@Injectable({
  providedIn: "root",
})
export class ProjectService {
  private readonly http = inject(HttpClient);

  readonly projects = signal<Project[]>([]);
  readonly loading = signal(false);
  readonly error = signal<string | null>(null);

  constructor() {
    this.loadProjects();
  }

  loadProjects(): void {
    this.loading.set(true);
    this.error.set(null);

    this.http.get<Project[]>("assets/projects.json").subscribe({
      next: (data) => {
        this.projects.set(data);
        this.loading.set(false);
      },
      error: (err) => {
        this.error.set("Error al carregar els projectes");
        this.loading.set(false);
        console.error("Error loading projects:", err);
      },
    });
  }
}
