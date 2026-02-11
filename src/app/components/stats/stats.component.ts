import { Component, OnInit } from "@angular/core";
import { CommonModule } from "@angular/common";

interface StatCard {
  label: string;
  value: number | string;
  unit?: string;
  icon?: string;
  description?: string;
}

@Component({
  selector: "app-stats",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./stats.component.html",
  styleUrls: ["./stats.component.scss"],
})
export class StatsComponent implements OnInit {
  birthDate = new Date(1978, 0, 25);
  programmingStartDate = new Date(1988, 0, 1);
  // Coordenades del centre de Sant Andreu, Barcelona
  santAndreaCoords = { lat: 41.4273, lng: 2.1817 };
  ageDisplay = "";
  yearsOfProgramming = "";
  distanceDisplay = "--";

  stats: StatCard[] = [
    {
      label: "Age",
      value: "",
      unit: "years",
      icon: "calendar",
      description: "Age doesn't forgive",
    },
    {
      label: "Years Programming",
      value: "",
      unit: "years",
      icon: "code",
      description: "Coding (From Basic to Angular)",
    },
    {
      label: "Open Source Projects",
      value: 3,
      unit: "projects",
      icon: "github",
      description: "Play with them on GitHub",
    },
    {
      label: "Distance to Sant Andreu",
      value: "--",
      unit: "km",
      icon: "location",
      description: "From your location",
    },
  ];

  ngOnInit(): void {
    this.calculateAge();
    this.calculateYearsProgramming();
    this.getLocationAndCalculateDistance();
  }

  /**
   * Calcula l'edat en anys (format decimal) des de la data de naixement fins a avui
   */
  calculateAge(): void {
    const today = new Date();
    let years = today.getFullYear() - this.birthDate.getFullYear();
    let months = today.getMonth() - this.birthDate.getMonth();
    let days = today.getDate() - this.birthDate.getDate();

    // Ajust si el mes no ha arribat encara
    if (months < 0 || (months === 0 && days < 0)) {
      years--;
      months += 12;
    }

    // Ajust si els dies són negatius
    if (days < 0) {
      months--;
      const prevMonth = new Date(today.getFullYear(), today.getMonth(), 0);
      days += prevMonth.getDate();
    }

    // Convertir mesos i dies a una fracció decimal de l'any
    // Total de dies desde l'últim aniversari
    const totalDays = days + months * 30;
    const decimalPart = totalDays / 365;
    const ageDecimal = years + decimalPart;

    // Mostrar amb 2 decimals
    this.ageDisplay = ageDecimal.toFixed(2);
    this.stats[0].value = this.ageDisplay;
  }

  /**
   * Calcula els anys transcorreguts desde que va começar a programar (1988)
   */
  calculateYearsProgramming(): void {
    const today = new Date();
    const years = today.getFullYear() - this.programmingStartDate.getFullYear();

    const yearLabel = years === 1 ? "any" : "anys";
    this.yearsOfProgramming = `${years}`;
    // Actualitzar el segon stat amb els anys de programació
    this.stats[1].value = this.yearsOfProgramming;
  }

  /**
   * Obté la localització de l'usuari i calcula la distancia a Sant Andreu
   */
  getLocationAndCalculateDistance(): void {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const userLat = position.coords.latitude;
          const userLng = position.coords.longitude;
          const distance = this.calculateDistance(userLat, userLng);
          this.distanceDisplay = distance.toFixed(1);
          this.stats[3].value = this.distanceDisplay;
        },
        (error) => {
          console.warn("Geolocation error:", error);
          this.distanceDisplay = "?";
          this.stats[3].value = "?";
        },
      );
    } else {
      console.warn("Geolocation not supported");
      this.distanceDisplay = "?";
      this.stats[3].value = "?";
    }
  }

  /**
   * Calcula la distancia entre dues coordenades (Fórmula de Haversine)
   * @param lat1 Latitud de l'usuari
   * @param lon1 Longitud de l'usuari
   * @returns Distancia en km
   */
  private calculateDistance(lat1: number, lon1: number): number {
    const R = 6371; // Radi de la Terra en km
    const dLat = this.toRad(this.santAndreaCoords.lat - lat1);
    const dLon = this.toRad(this.santAndreaCoords.lng - lon1);

    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(this.toRad(lat1)) *
        Math.cos(this.toRad(this.santAndreaCoords.lat)) *
        Math.sin(dLon / 2) *
        Math.sin(dLon / 2);

    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return R * c;
  }

  /**
   * Converteix graus a radians
   */
  private toRad(deg: number): number {
    return deg * (Math.PI / 180);
  }

  getIcon(icon?: string): string {
    switch (icon) {
      case "calendar":
        return "📅";
      case "code":
        return "💻";
      case "github":
        return "🐙";
      case "lock":
        return "🔒";
      case "star":
        return "⭐";
      case "git":
        return "🔀";
      case "award":
        return "🏆";
      case "users":
        return "👥";
      case "zap":
        return "⚡";
      case "location":
        return "📍";
      default:
        return "📊";
    }
  }
}
