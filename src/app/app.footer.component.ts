import {Component} from '@angular/core';

@Component({
    selector: 'app-footer',
    template: `
      <div class="layout-footer">
          <a href="/dashboard" class="logo-container">
              <img src="assets/layout/images/harmony-logo.png" alt="harmony-layout" />
              <span class="app-name">WDYS</span>
          </a>

      </div>
    `
})
export class AppFooterComponent {

}
