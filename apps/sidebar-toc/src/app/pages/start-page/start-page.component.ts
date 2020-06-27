import { Component, OnInit, ViewChildren, QueryList, ElementRef } from '@angular/core';

@Component({
  selector: 'angular-sandbox-start-page',
  templateUrl: './start-page.component.html',
  styleUrls: ['./start-page.component.scss']
})
export class StartPageComponent implements OnInit
{

  sections = [
    { id: "s1", title: "Section 1" },
    { id: "s2", title: "Section 2" },
    { id: "s3", title: "Section 3" }
  ]

  constructor () { }

  ngOnInit(): void { }
}
