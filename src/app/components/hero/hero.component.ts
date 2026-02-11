import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";

@Component({
  selector: "app-hero",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./hero.component.html",
  styleUrls: ["./hero.component.scss"],
})
export class HeroComponent {
  socialLinks = [
    {
      icon: "github",
      url: "https://github.com/yourusername",
      label: "GitHub",
      ariaLabel: "Visita el meu GitHub",
    },
    {
      icon: "linkedin",
      url: "https://linkedin.com/in/yourusername",
      label: "LinkedIn",
      ariaLabel: "Visita el meu LinkedIn",
    },
    {
      icon: "email",
      url: "mailto:your.email@example.com",
      label: "Email",
      ariaLabel: "Envia'm un correu",
    },
  ];
}
