import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  mostrarMenu: boolean;

  constructor(private router: Router) {
    this.mostrarMenu = false;
    router.events.subscribe((event) => {
      this.mostrarMenu = false;
    })
  }

  ngOnInit() {
  }

  showMenu() {
    this.mostrarMenu = true;

  }
  closeMenu() {
    this.mostrarMenu = false;
  }
}
