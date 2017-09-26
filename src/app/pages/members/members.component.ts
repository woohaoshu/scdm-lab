import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'scdm-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.scss']
})
export class MembersComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  public goTo(anchor: string) {
    setTimeout(() => {
      (<any>document).querySelector('#' + anchor).scrollIntoView();
    });
  }

}
