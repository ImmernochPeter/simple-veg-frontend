import { Component, inject, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MarkdownDirective } from '../../utils/directives/markdown';

@Component({
  selector: 'app-privacy',
  imports: [MarkdownDirective],
  templateUrl: './privacy.html',
  styleUrl: './privacy.scss',
})
export class Privacy implements OnInit {
  private http = inject(HttpClient);
  policy = '';

  ngOnInit() {
    this.http.get('/privacy.md', { responseType: 'text' }).subscribe(content => {
      this.policy = content;
    });
  }
}
