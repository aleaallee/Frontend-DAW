import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
})
export class NavComponent implements OnInit {
  expanded = false;
  toggled = false;
  navWrapperToggled = false;
  isLogged: boolean = false;

  constructor() {}

  ngOnInit(): void {
    this.checkLogin();
  }

  toggleDropdown(): void {
    this.toggled = !this.toggled;
  }

  checkLogin(): void {
    this.isLogged = localStorage.getItem('username') ? true : false;
  }
}
