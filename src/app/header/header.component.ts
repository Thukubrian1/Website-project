import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  isMobileMenuOpen: boolean = false;

  toggleMobileMenu(): void {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }


  
  // constructor(private router: Router) { }

  // items: MenuItem[] = [];

  // ngOnInit() {
  //   this.items = [
  //     {
  //       label: 'Home',
  //       shortcut: 'Ctrl+H',
  //       command: () => {
  //         this.router.navigateByUrl('home');
  //       }
  //     },
  //     {
  //       label: 'Shop',
  //       shortcut: 'Ctrl+S',
  //       command: () => {
  //         this.router.navigateByUrl('shop');
  //       }
  //     },
  //     {
  //       label: 'Events',
  //       shortcut: null,
  //       command: () => {
  //         this.router.navigateByUrl('events');
  //       }
  //     },
  //     {
  //       label: 'Support',
  //       shortcut: null,
  //       command: () => {
  //         this.router.navigateByUrl('support');
  //       }
  //     }
  //   ];
  // }
}
