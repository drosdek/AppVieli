import { Component, OnInit } from '@angular/core';

declare const $;
declare interface RouteInfo {
  path: string;
  title: string;
  icon: string;
  class: string;
}

export const ROUTES: RouteInfo[] = [
  { path: '/dashboard', title: 'Dashboard',  icon: 'dashboard', class: '' },
  { path: '/telao', title: 'Telao',  icon: 'dashboard', class: '' },
  { path: '/controle-producao', title: 'Controle de producao', icon: 'content_paste', class: '' }

];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  menuItems: any[];

  constructor() { }

  ngOnInit(): void {
    this.menuItems = ROUTES.filter(menuItems => menuItems);
  }

  isMobileMenu(): boolean {
    if ($(window).width() > 991){
      return false;
    }
    return true;
  }

}
