import { Component } from '@angular/core';

@Component({
  selector: 'scdm-root',
  template: `
    <scdm-header></scdm-header>
    <router-outlet></router-outlet>
    <scdm-footer></scdm-footer>
`,
})
export class AppComponent {
  title = 'scdm';
}
