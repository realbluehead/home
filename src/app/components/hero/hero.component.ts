import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";

interface SocialLink {
  icon: "github" | "linkedin" | "email";
  url: string;
  label: string;
  ariaLabel: string;
}

@Component({
  selector: "app-hero",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./hero.component.html",
  styleUrls: ["./hero.component.scss"],
})
export class HeroComponent {
  socialLinks: SocialLink[] = [
    {
      icon: "github",
      url: "https://github.com/realbluehead",
      label: "GitHub",
      ariaLabel: "Visit my GitHub",
    },
    {
      icon: "linkedin",
      url: "https://www.linkedin.com/in/carles-rius-2642388/",
      label: "LinkedIn",
      ariaLabel: "Visit my LinkedIn",
    },
    {
      icon: "email",
      url: "mailto:realbluehead@gmail.com",
      label: "Email",
      ariaLabel: "Send me an email",
    },
  ];
}
