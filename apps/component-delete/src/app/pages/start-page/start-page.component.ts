import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'angular-sandbox-start-page',
  templateUrl: './start-page.component.html',
  styleUrls: ['./start-page.component.scss']
})
export class StartPageComponent implements OnInit
{

  dropDowns = [
    { title: "Titel 1", desc: "beskrivning 1", content: "asdasdad1" },
    { title: "Titel 2", desc: "beskrivning 2", content: "asdasdad2" },
    { title: "Titel 3", desc: "beskrivning 3", content: "asdasdad3" },
    { title: "Titel 4", desc: "beskrivning 4", content: "asdasdad4" }
  ];

  constructor () { }

  ngOnInit(): void
  {
  }

  deleteRow(e)
  {
    // console.log("delete...");
    // console.log(e);

    for (let i = 0; i < this.dropDowns.length; i++)
    {
      if (this.dropDowns[i].title == e)
      {
        this.dropDowns.splice(i, 1);
      }
    }
  }

}
