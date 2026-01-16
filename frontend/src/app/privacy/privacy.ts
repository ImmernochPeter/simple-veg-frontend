import { Component } from '@angular/core';
import { MarkdownDirective } from '../../utils/directives/markdown';

@Component({
  selector: 'app-privacy',
  imports: [MarkdownDirective],
  templateUrl: './privacy.html',
  styleUrl: './privacy.scss',
})
export class Privacy {
  policy = "## Datenschutzerklärung für SimpleVeg.de"
}
