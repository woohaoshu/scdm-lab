import { Component, OnInit } from '@angular/core';

import { Member } from './member';
import { MemberService } from './member.service';

declare var $: any; //使用jQuery

@Component({
  selector: 'scdm-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.scss'],
  providers: [MemberService]
})
export class MembersComponent implements OnInit {
  members: Member[];

  public affixTopMargin = 0;//固定在顶部参数


  constructor(private memberService: MemberService) { }

  //通过service获得members
  getMembers(): void {
    this.memberService.getMembers().then(members => this.members = members);
    console.log(this.members);
  }

  ngOnInit() {
    this.affixTopMargin = $(window).height();
    this.getMembers();
  }

  // //affix
  // public goTo(anchor: string) {
  //   setTimeout(() => {
  //     (<any>document).querySelector('#' + anchor).scrollIntoView();
  //   });
  // }

}