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

  @ViewChildren('navItem')
  navItems: QueryList<any>

  currentSectionId = null;

  constructor () { }

  ngOnInit(): void
  {

  }

  ngAfterViewInit()
  {
    window.addEventListener('scroll', this.onScroll.bind(this), true);
  }

  onScroll()
  {
    let navElements = this.navItems.toArray();

    navElements.forEach((element) =>
    {
      let id = element._elementRef.nativeElement.getAttribute('href').toString();

      id = id.substring(1, id.length);

      let offsetTop = document.getElementById(id).offsetTop;

      if (window.scrollY > offsetTop - 250)
      {
        this.currentSectionId = id;
      }


    });
  }
}
