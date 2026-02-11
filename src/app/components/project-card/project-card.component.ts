import { Component, input, signal } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Project } from "../../models/project.interface";

@Component({
  selector: "app-project-card",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./project-card.component.html",
  styleUrls: ["./project-card.component.scss"],
})
export class ProjectCardComponent {
  project = input.required<Project>();
  isZoomed = signal(false);

  toggleZoom(): void {
    this.isZoomed.update((val) => !val);
  }
}
