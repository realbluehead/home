import { Component, OnInit } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HeroComponent } from "../../components/hero/hero.component";
import { StatsComponent } from "../../components/stats/stats.component";
import { ProjectCardComponent } from "../../components/project-card/project-card.component";
import { ProjectService } from "../../services/project.service";

@Component({
  selector: "app-home",
  standalone: true,
  imports: [CommonModule, HeroComponent, StatsComponent, ProjectCardComponent],
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
})
export class HomeComponent implements OnInit {
  constructor(readonly projectService: ProjectService) {}

  ngOnInit(): void {
    // Projects are loaded automatically via ProjectService on initialization
  }
}
