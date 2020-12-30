import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styles: ["./navbar.component.css"]
})
export class NavbarComponent implements OnInit {
  paises: any[] = []

  constructor(private router: Router) {
    this.paises = [[ "AD", "Andorra"],
    [ "AE", "United Arab Emirates"],    
    [ "AL", "Albania"],
    [ "AR", "Argentina"],
    [ "AT", "Austria"],
    [ "AU", "Australia"],
    //B
    [ "BA", "Bosnia and Herzegovina"],
    [ "BE", "Belgium"],
    [ "BG", "Bulgaria"],
    [ "BH", "Bahrain"],
    [ "BO", "Bolivia, Plurinational State of"],
    [ "BR", "Brazil"],
    [ "BY", "Belarus"],
    //C
    [ "CA", "Canada"],
    [ "CH", "Switzerland"],
    [ "CL", "Chile"],
    [ "CO", "Colombia"],
    [ "CR", "Costa Rica"],
    [ "CY", "Cyprus"],
    [ "CZ", "Czech Republic"],
    //D
    [ "DE", "Germany"],
    [ "DK", "Denmark"],
    [ "DO", "Dominican Republic"],
    [ "DZ", "Algeria"],
    //E
    [ "EC", "Ecuador"],
    [ "EE", "Estonia"],
    [ "EG", "Egypt"],
    [ "ES", "Spain"],
    //F
    [ "FI", "Finland"],
    [ "FR", "France"],
    //G
    [ "GB", "United Kingdom"],
    [ "GR", "Greece"],
    [ "GT", "Guatemala"],
    //H
    [ "HK", "Hong Kong"],
    [ "HN", "Honduras"],
    [ "HR", "Croatia"],
    [ "HU", "Hungary"],
    //I
    [ "ID", "Indonesia"],
    [ "IE", "Ireland"],
    [ "IL", "Israel"],
    [ "IN", "India"],
    [ "IS", "Iceland"],
    [ "IT", "Italy"],
    //J
    [ "JP", "Japan"],
    //K
    [ "KW", "Kuwait"],
    //L
    [ "LB", "Lebanon"],
    [ "LI", "Liechtenstein"],
    [ "LU", "Luxembourg"],
    [ "LV", "Latvia"],
    //M
    [ "MA", "Morocco"],
    [ "MO", "Macao"],
    [ "MT", "Malta"],
    [ "MX", "Mexico"],
    [ "MY", "Malaysia"],
    //N
    [ "NI", "Nicaragua"],
    [ "NL", "Netherlands"],
    [ "NO", "Norway"],
    [ "NZ", "New Zealand"],
    //O
    [ "OM", "Oman"],
    //P
    [ "PA", "Panama"],
    [ "PE", "Peru"],
    [ "PH", "Philippines"],
    [ "PL", "Poland"],
    [ "PS", "Palestine, State of"],
    [ "PT", "Portugal"],
    [ "PY", "Paraguay"],
    //Q
    [ "QA", "Qatar"],
    //R
    [ "RO", "Romania"],
    [ "RS", "Serbia"],
    [ "RU", "Russian Federation"],
    //S
    [ "SA", "Saudi Arabia"],
    [ "SE", "Sweden"],
    [ "SK", "Slovakia"],
    //T
    [ "TH", "Thailand"],
    [ "TN", "Tunisia"],
    [ "TR", "Turkey"],
    //U
    [ "UA", "Ukraine"],
    [ "US", "United States of America"],
    [ "UY", "Uruguay"],
    //V
    [ "VN", "Viet Nam"],

    //Z
    [ "ZA", "South Africa"],
    ]
  }

  ngOnInit() {
  }
  
  onNavigate(location: string){ this.router.navigateByUrl("home/"+location);; }
}
