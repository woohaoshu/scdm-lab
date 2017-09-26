import { Component, OnInit } from '@angular/core';
import { ScrollSpyService } from 'ngx-scrollspy';
declare var $: any; //使用jQuery

@Component({
  selector: 'scdm-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.scss']
})
export class MembersComponent implements OnInit {
  public affixTopMargin = 0;//固定在顶部参数
  

  constructor(private scrollSpyService: ScrollSpyService) {}

  ngOnInit() {
    this.affixTopMargin = $(window).height();
    // this.scrollSpyService.getObservable('window').subscribe((e: any) => {
		// 	console.log('ScrollSpy::window: ', e);
		// });
  }

  public goTo(anchor: string) {
    setTimeout(() => {
      (<any>document).querySelector('#' + anchor).scrollIntoView();
    });
  }

}
