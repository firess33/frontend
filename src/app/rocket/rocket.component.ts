import { Component } from '@angular/core';

@Component({
  selector: 'app-rocket',
  imports: [],
  templateUrl: './rocket.component.html',
  styleUrl: './rocket.component.scss'
})
export class RocketComponent {
vehicles = [
  { id: 0, name: 'Car A', src: '/a.png', active: false ,x:0,y:0,dx:0,dy:0},
  { id: 1, name: 'Car B', src: '/b.png', active: false ,x:0,y:0,dx:0,dy:0},
  { id: 2, name: 'Car C', src: '/c.png', active: false ,x:0,y:0,dx:0,dy:0},
  { id: 3, name: 'Car D', src: '/a.png', active: false ,x:0,y:0,dx:0,dy:0},
  { id: 4, name: 'Car E', src: '/b.png', active: false ,x:0,y:0,dx:0,dy:0}
];


  anime(i: number) {
    const v = this.vehicles[i];
    console.log('使用者點擊了：', v.name);
    v.active = true;
    setTimeout(() => v.active = false, 1000);}






    ///移動all 相關s.if(car=2)
}
