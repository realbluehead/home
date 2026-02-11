// GUÍA DE PERSONALITZACIÓ - Portfolio Component

/\*\*

- ============================================
- 1.  PERSONALITZAR PROJECTES.JSON
- ============================================
  \*/

// Exemple de projecte complet:
const exampleProject = {
id: "1",
title: "E-commerce Platform",
description: "Plataforma de comerç electrònic completa amb checkout, pagaments i gestió d'inventari.",
imageUrl: "https://images.unsplash.com/photo-1557821552-17105176677c?w=500&h=300&fit=crop",
demoUrl: "https://demo.example.com", // Opcional
repoUrl: "https://github.com/user/repo",
tags: ["Angular", "TypeScript", "Node.js", "MongoDB"]
};

/\*\*

- ============================================
- 2.  ESTENDRE PROJECTSERVICE
- ============================================
  \*/

// Per afegir més funcionalitats al servei:

/\*
export class ProjectService {
// Filtrar projectes per tag
getProjectsByTag(tag: string): Signal<Project[]> {
return computed(() =>
this.projects().filter(p => p.tags.includes(tag))
);
}

// Cercar projectes
searchProjects(query: string): Signal<Project[]> {
return computed(() =>
this.projects().filter(p =>
p.title.toLowerCase().includes(query.toLowerCase()) ||
p.description.toLowerCase().includes(query.toLowerCase())
)
);
}

// Carrega des d'una API remota
loadFromAPI(apiUrl: string): void {
this.loading.set(true);
this.http.get<Project[]>(apiUrl).subscribe({
next: (data) => {
this.projects.set(data);
this.loading.set(false);
},
error: (err) => {
this.error.set('Error al carregar');
this.loading.set(false);
}
});
}
}
\*/

/\*\*

- ============================================
- 3.  PERSONALITZAR ESTILS
- ============================================
  \*/

// Per canviar colors en project-card.component.scss:

/\*
// Tema fosc:
.project-card {
background: #1e1e1e; // Canviar per fons fosc
color: #e0e0e0;

.project-title {
color: #ffffff;
}

.project-description {
color: #b0b0b0;
}
}

// Tema personalitzat amb colors brand:
.card-footer .link-btn.demo-btn:hover {
background: #your-brand-color;
color: white;
}
\*/

/\*\*

- ============================================
- 4.  AFEGIR FILTRE DE TAGS
- ============================================
  \*/

// homeComponent.ts - Versió amb filtre:
/\*
import { signal, computed } from '@angular/core';

export class HomeComponent implements OnInit {
selectedTag = signal<string | null>(null);

get filteredProjects() {
return computed(() => {
const tag = this.selectedTag();
if (!tag) return this.projectService.projects();
return this.projectService.projects().filter(p => p.tags.includes(tag));
});
}

selectTag(tag: string): void {
this.selectedTag.set(this.selectedTag() === tag ? null : tag);
}
}
\*/

/\*
// home.component.html - Versió amb filtre:

<div class="tags-filter">
  <button 
    *ngFor="let tag of getAllTags()"
    [class.active]="selectedTag() === tag"
    (click)="selectTag(tag)"
  >
    {{ tag }}
  </button>
</div>

<div class="projects-grid">
  <app-project-card 
    *ngFor="let project of filteredProjects()"
    [project]="project"
  ></app-project-card>
</div>
*/

/\*\*

- ============================================
- 5.  AFEGIR MODE DARK
- ============================================
  \*/

// Servei per al mode dark:
/\*
import { signal } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ThemeService {
isDarkMode = signal(false);

toggleDarkMode(): void {
this.isDarkMode.update(mode => !mode);
}
}

// home.component.ts
export class HomeComponent {
constructor(readonly themeService: ThemeService) {}

ngOnInit() {
// Detectar preferència del SO
if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
this.themeService.isDarkMode.set(true);
}
}
}

// home.component.html

<div [class.dark-mode]="themeService.isDarkMode()">
  <!-- Contingut -->
</div>
*/

/\*\*

- ============================================
- 6.  LINKS I RECURSOS
- ============================================
  \*/

// Icons SVG - Pots reemplaçar els icones del footer
// Demo icon: Una ull (eye icon)
// GitHub icon: Logo de GitHub oficial

// API per obtenir projectes:
// GitHub API: https://api.github.com/users/{username}/repos
// Convertir-la en format Project interface

/\*\*

- ============================================
- 7.  EXEMPLE COMPONENT ESTÈS - GALLERY VIEW
- ============================================
  \*/

/\*
export class ProjectGalleryComponent {
selectedProject = signal<Project | null>(null);

openProject(project: Project): void {
this.selectedProject.set(project);
}

closeProject(): void {
this.selectedProject.set(null);
}
}
\*/

/\*\*

- ============================================
- 8.  MILLORA: INFINITE SCROLL
- ============================================
  \*/

/\*
export class HomeComponent {
pageSize = 6;
currentPage = signal(1);

get visibleProjects() {
return computed(() => {
const end = this.currentPage() \* this.pageSize;
return this.projectService.projects().slice(0, end);
});
}

loadMore(): void {
this.currentPage.update(page => page + 1);
}
}
\*/

export {}; // Fitxer de referència, no exporta codi
