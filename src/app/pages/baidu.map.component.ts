import {Component, OnInit} from '@angular/core';
import { OfflineOptions, ControlAnchor, NavigationControlType} from 'angular2-baidu-map';

@Component({
    selector: 'map-presentation',
    template: `
        <baidu-map ak="SSePR0qpFovGtDuBlWVa9deztpONDfzs" [options]="opts" [offline]="offlineOpts" (onMapLoaded)="loadMap($event)" (onMarkerClicked)="clickMarker($event)"></baidu-map>
    `,
    styles: [`
        baidu-map{
            height: 300px;
            display: block;
        }
    `]
})
export class BaiduMapComponent implements OnInit {

    opts: any;
    offlineOpts: OfflineOptions;

    ngOnInit() {
        this.opts = {
            center: {
                longitude: 121.406232,
                latitude: 31.32411
            },
            zoom: 15,
            markers: [{
                longitude: 121.406232,
                latitude: 31.32411,
                title: 'Lab of SCDM, Shanghai University',
                content: 'No.99, ShangDa Road, <br> BaoShan District, <br> ShangHai, China',
                autoDisplayInfoWindow: true,
                enableDragging: true
            }],
            geolocationCtrl: {
                anchor: ControlAnchor.BMAP_ANCHOR_BOTTOM_RIGHT
            },
            scaleCtrl: {
                anchor: ControlAnchor.BMAP_ANCHOR_BOTTOM_LEFT
            },
            overviewCtrl: {
                isOpen: true
            },
            navCtrl: {
                type: NavigationControlType.BMAP_NAVIGATION_CONTROL_LARGE
            }
        };

        this.offlineOpts = {
            retryInterval: 5000,
            txt: 'NO-NETWORK'
        };
    }

    loadMap(e: any) {
        console.log(e);//e here is the instance of BMap.Map
    }

    clickMarker(marker: any){
        console.log('The clicked marker is', marker.getPosition());
    }

}