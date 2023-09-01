import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  @Output() featureSelected = new EventEmitter();
  selectedPage: string = 'recipes';
  constructor(private router: Router) {}
  ngOnInit(): void {}
  onSelect(feature: string) {
    this.router.navigate([feature]);
    this.updateSelectedPage(feature);
  }

  updateSelectedPage(page: string) {
    this.selectedPage = page;
  }
}
