import { Component, OnInit, Input, ViewChildren, QueryList } from '@angular/core';

@Component({
  selector: 'app-toc',
  templateUrl: './toc.component.html',
  styleUrls: ['./toc.component.scss']
})
export class TocComponent implements OnInit {

  @Input() sections: Array<any>;

  @ViewChildren('navItem')
  navItems: QueryList<any>

  currentSectionId = null;

  constructor() { }

  ngOnInit(): void {
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
      let id = element.nativeElement.getAttribute('href').toString();

      id = id.substring(1, id.length);

      let offsetTop = document.getElementById(id).offsetTop;

      if (window.scrollY > offsetTop - 250)
      {
        this.currentSectionId = id;
      }
    });
  }

}
