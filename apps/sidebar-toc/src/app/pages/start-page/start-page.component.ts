import { Component, OnInit, ViewChildren, QueryList, ElementRef } from '@angular/core';

@Component({
  selector: 'angular-sandbox-start-page',
  templateUrl: './start-page.component.html',
  styleUrls: ['./start-page.component.scss']
})
export class StartPageComponent implements OnInit
{

  sections = [
    { id: "s1", title: "Chapter title" },
    { id: "s2", title: "Another Chapter title" },
    { id: "s3", title: "Another cool title" },
	//TODO: Make sure the component works with longer titles
	//{ id: "s3", title: "Another very cool and profound chapter title" },
	{ id: "s4", title: "Closing words" }
  ]

  constructor () { }

  ngOnInit(): void { }
}
