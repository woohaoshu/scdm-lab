import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesRoutingModule } from './pages-routing.module';

//import ngx-scrollspy
import { ScrollSpyIndexModule } from 'ngx-scrollspy/dist/plugin'
import { ScrollSpyAffixModule } from 'ngx-scrollspy/dist/plugin/affix'


//import BaiduMapModule
import { BaiduMapModule } from 'angular2-baidu-map';
import { BaiduMapComponent } from './baidu.map.component';

import { HomeComponent } from './home/home.component';
import { MembersComponent } from './members/members.component';
import { PapersComponent } from './papers/papers.component';
import { ProjectsComponent } from './projects/projects.component';
import { MeetingsComponent } from './meetings/meetings.component';
import { NewsComponent } from './news/news.component';
import { PhotosComponent } from './photos/photos.component';
import { ContactComponent } from './contact/contact.component';

@NgModule({
  imports: [
    CommonModule,
    PagesRoutingModule,
    ScrollSpyIndexModule,
    ScrollSpyAffixModule,
    BaiduMapModule,
  ],
  declarations: [
    HomeComponent, 
    MembersComponent, 
    PapersComponent, 
    ProjectsComponent, 
    MeetingsComponent, 
    NewsComponent, 
    PhotosComponent, 
    ContactComponent,
    BaiduMapComponent
  ]
})
export class PagesModule { }
