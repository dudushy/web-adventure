/* eslint-disable @typescript-eslint/no-explicit-any */
import { Component, ChangeDetectorRef } from '@angular/core';

import { DbService } from './services/db/db.service';

import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  PROJECT_NAME = 'Web Adventure';
  PROJECT_DIR = 'web-adventure';

  title = 'AppComponent';

  allPages: any = [];
  currentPage: any = null;

  theme = 'dark';
  hasScrollbar = false;

  constructor(
    public db: DbService,
    public router: Router,
    private cdr: ChangeDetectorRef,
    public location: Location
  ) {
    console.log(`[${this.title}#constructor]`);

    const rawAllPages = this.router.config;
    console.log(`[${this.title}#constructor] rawAllPages`, rawAllPages);

    this.allPages = rawAllPages.filter((page: any) => {
      return (
        page.path !== '' &&
        page.path !== '**' &&
        page.path !== 'home' &&
        page.path !== 'test' &&
        page.path !== 'not-found'
      );
    });

    console.log(`[${this.title}#constructor] allPages`, this.allPages);

    this.theme = this.db.getLocal('theme') || 'dark';
    this.toggleTheme(this.theme);

    window.onresize = () => {
      console.log(`[${this.title}#window.onresize]`);

      this.detectScrollbar();
      this.getZoomLevel();
    };

    window.onload = () => {
      console.log(`[${this.title}#window.onload]`);

      const url = this.router.url.replace('/', '');
      console.log(`[${this.title}#window.onload] url`, url);

      this.updateUrl(url);

      this.loadLastScrollPosition();

      this.detectScrollbar();
      this.getZoomLevel();
    };

    window.onbeforeunload = (e) => {
      console.log(`[${this.title}#window.onbeforeunload] e`, e);

      this.saveLastScrollPosition();
    };
  }

  updateView(from: string) {
    console.log(`[${this.title}#updateView] from`, from);
    this.cdr.detectChanges;
  }

  async redirectTo(url: any, from: any) {
    console.log(`[${this.title}#redirectTo] ${from} | url`, url);

    await this.router.navigateByUrl(`/${url}`);

    this.updateUrl(url);
  }

  updateUrl(url: any) {
    console.log(`[${this.title}#updateUrl] url`, url);

    this.currentPage = url;
    this.db.setLocal('last_page', url);
    console.log(`[${this.title}#redirectTo] last_page`, this.db.getLocal('last_page'));

    const appRoot = document.querySelector('app-root');
    console.log(`[${this.title}#redirectTo] appRoot`, appRoot);

    appRoot.scrollTop = 0;
  }

  defaultOrder() { return 0; }

  openLink(url) { window.open(url, '_blank'); }

  toggleTheme(theme: any) {
    console.log(`[${this.title}#toggleTheme] theme`, theme);

    this.theme = theme;
    this.db.setLocal('theme', theme);

    document.documentElement.setAttribute('theme', theme);
    document.documentElement.style.setProperty('--theme', theme);

    this.updateView(this.title);
  }

  detectScrollbar() {
    const appRoot = document.querySelector('app-root');
    console.log(`[${this.title}#detectScrollbar] appRoot`, appRoot);

    this.hasScrollbar = appRoot.scrollHeight > appRoot.clientHeight;
    console.log(`[${this.title}#detectScrollbar] hasScrollbar`, this.hasScrollbar);
  }

  getZoomLevel() {
    return; //!OUT OF ORDER

    console.log(`[${this.title}#getZoomLevel] window.visualViewport`, window.visualViewport);
    console.log(`[${this.title}#getZoomLevel] window.visualViewport.scale`, window.visualViewport.scale);

    const isDeviceMode = window.visualViewport && window.visualViewport.scale !== 1;
    console.log(`[${this.title}#getZoomLevel] isDeviceMode`, isDeviceMode);

    const zoomLevel = window.devicePixelRatio || 1;
    console.log(`[${this.title}#getZoomLevel] zoomLevel`, zoomLevel);

    const zoomRatio = isDeviceMode ? 1 : zoomLevel;
    console.log(`[${this.title}#getZoomLevel] zoomRatio`, zoomRatio);

    document.documentElement.style.setProperty('--zoomRatio', `${zoomRatio}`);
  }

  saveLastScrollPosition() {
    console.log(`[${this.title}#saveLastScrollPosition]`);

    const appRoot = document.querySelector('app-root');
    console.log(`[${this.title}#saveLastScrollPosition] appRoot`, appRoot);

    const main = appRoot.firstChild as HTMLElement;
    console.log(`[${this.title}#saveLastScrollPosition] main`, main);

    const url = this.router.url.replace('/', '');
    console.log(`[${this.title}#saveLastScrollPosition] url`, url);

    // this.db.setLocal(`lastScrollPosition-${url}`, main.scrollTop);
    // console.log(`[${this.title}#saveLastScrollPosition] lastScrollPosition`, this.db.getLocal(`lastScrollPosition-${url}`));
    this.db.setSession(`lastScrollPosition-${url}`, main.scrollTop);
    console.log(`[${this.title}#saveLastScrollPosition] lastScrollPosition`, this.db.getSession(`lastScrollPosition-${url}`));
  }

  loadLastScrollPosition() {
    console.log(`[${this.title}#loadLastScrollPosition]`);

    const appRoot = document.querySelector('app-root');
    console.log(`[${this.title}#loadLastScrollPosition] appRoot`, appRoot);

    const main = appRoot.firstChild as HTMLElement;
    console.log(`[${this.title}#loadLastScrollPosition] main`, main);

    const url = this.router.url.replace('/', '');
    console.log(`[${this.title}#saveLastScrollPosition] url`, url);

    // const lastScrollPosition = this.db.getLocal(`lastScrollPosition-${url}`);
    const lastScrollPosition = this.db.getSession(`lastScrollPosition-${url}`);
    console.log(`[${this.title}#loadLastScrollPosition] lastScrollPosition`, lastScrollPosition);

    if (lastScrollPosition) {
      main.scrollTop = lastScrollPosition;
    }
  }
}
