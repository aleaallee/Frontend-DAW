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

  constructor() {}

  ngOnInit(): void {}

  toggleDropdown(): void {
    this.toggled = !this.toggled;
  }
}
