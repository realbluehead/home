# 🎨 Portfolio Modern - Angular 19/20

Portal modern i compacte per mostrar els teus projectes de GitHub amb disseny Masonry reponsiu.

## 📋 Característiques

✅ **Angular 19/20** amb Standalone Components  
✅ **Signals** per a gestió d'estat reactiva  
✅ **Layout Masonry** amb CSS Columns (sense llibreries externes)  
✅ **Disseny Responsive** (1 col mòbil, 2 tablet, 3-4 desktop)  
✅ **ProjectCard Component** compacte i elegant  
✅ **Dades JSON** carregades via HttpClient

## 🗂️ Estructura de Fitxers

```
src/
├── app/
│   ├── models/
│   │   └── project.interface.ts          # Interfície Project
│   ├── services/
│   │   └── project.service.ts            # Servei per carregar projectes
│   ├── components/
│   │   └── project-card/
│   │       ├── project-card.component.ts
│   │       ├── project-card.component.html
│   │       └── project-card.component.scss
│   ├── pages/
│   │   └── home/
│   │       ├── home.component.ts
│   │       ├── home.component.html
│   │       └── home.component.scss
│   ├── app.component.ts
│   └── app.config.ts
├── assets/
│   └── projects.json                     # Base de dades de projectes
├── main.ts
└── styles.scss                           # Estils globals
```

## 🚀 Setup

### 1. Copiar els fitxers

Copia tots els arxius de la carpeta `src/` dins de la teva estructura d'Angular.

### 2. Verificar HttpClientModule

Assegura't que la configuració a `app.config.ts` inclou HttpClient:

```typescript
import {
  provideHttpClient,
  withInterceptorsFromDi,
} from "@angular/common/http";

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideHttpClient(withInterceptorsFromDi()),
  ],
};
```

### 3. Personalitzar `projects.json`

Edita `src/assets/projects.json` amb els teus projectes reals:

```json
{
  "id": "1",
  "title": "El meu projecte",
  "description": "Descripció breu del projecte",
  "imageUrl": "https://url-de-imatge.jpg",
  "demoUrl": "https://demo-url.com",
  "repoUrl": "https://github.com/usuari/repo",
  "tags": ["Angular", "TypeScript", "TailwindCSS"]
}
```

## 🎯 Interfície Project

```typescript
export interface Project {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  demoUrl?: string; // Opcional
  repoUrl: string;
  tags: string[];
}
```

## 🔧 ProjectService

El servei carrega automàticament els projectes al inicialitzar-se:

```typescript
export class ProjectService {
  readonly projects = signal<Project[]>([]);      // Llista de projectes
  readonly loading = signal(false);                // Estat de carrega
  readonly error = signal<string | null>(null);   // Missatges d'error

  loadProjects(): void { ... }
}
```

## 🎨 Design Details

### ProjectCard

- **Disseny compacte** amb imatge 16:9
- **Títol i descripció** amb truncat automàtic (2 línies)
- **Badges de tags** amb estil modern
- **Footer amb links** (Demo i GitHub)
- **Efectes hover** suaus

### HomeComponent

- **Layout Masonry** responsiu
- **Estados** de carrega, error i buit
- **Spinner animat** durant la carrega
- **Gestió d'errors** amb missatges clars

### Colors i Tipografia

- **Tipografia**: -apple-system, BlinkMacSystemFont, Segoe UI (sans-serif)
- **Colors primaris**: #1a1a1a (text), #ffffff (fons)
- **Ombres**: `box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08)`
- **Vores arrodonides**: `border-radius: 12px`

## 📱 Responsive Breakpoints

```scss
// Desktop: 3-4 columnes
// Tablet (max-width: 1024px): 2 columnes
// Mòbil (max-width: 640px): 1 columna
```

## 🎬 Com funciona

1. **Inicialització**: `ProjectService` es carrega automàticament
2. **Carrega de dades**: Llegeix `projects.json` via HttpClient
3. **Rendering**: `HomeComponent` renderitza les cards en layout Masonry
4. **Interacció**: Els usuaris poden clicar als links de Demo i GitHub

## ✨ Millores Futures

- [ ] Filtrar projectes per tags
- [ ] Buscar projectes
- [ ] Mode dark
- [ ] Animacions no-scroll
- [ ] Cache de dades

## 📝 Llicència

Lliure per usar i modificar! 🚀
