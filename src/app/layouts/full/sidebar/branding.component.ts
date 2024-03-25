import { Component } from '@angular/core';

@Component({
  selector: 'app-branding',
  template: `
    <div class="branding">
      <a href="/" style="text-decoration:none">
        <h2
          style="background-image: linear-gradient(to right, #330000, red); -webkit-background-clip: text; color: transparent">
          REDSOFT
        </h2>
      </a>
    </div>
  `,
})
export class BrandingComponent {
  constructor() {}
}
