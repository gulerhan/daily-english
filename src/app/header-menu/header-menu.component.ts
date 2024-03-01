import { Component } from '@angular/core';

@Component({
  selector: 'app-header-menu',
  templateUrl: './header-menu.component.html',
  styleUrls: ['./header-menu.component.scss'],
})
export class HeaderMenuComponent   {
  isModalOpen = false;
  constructor() { }

  setOpen(isOpen: boolean) {
    this.isModalOpen = isOpen;
  }
}
