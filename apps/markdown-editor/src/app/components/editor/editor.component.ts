import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'angular-sandbox-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.scss']
})
export class EditorComponent implements OnInit {

  markdownText: string;

  constructor() { }

  ngOnInit(): void {
  }

}
