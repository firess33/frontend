import { Component, ElementRef, ViewChild } from '@angular/core';
import {CommonModule}from '@angular/common';

@Component({
  selector: 'app-ad',
  imports: [CommonModule],
  templateUrl: './ad.component.html',
  styleUrl: './ad.component.scss'
})
export class AdComponent {
showanime:number=1;

ngAfterViewInit(): void {
  //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
  //Add 'implements AfterViewInit' to the class.
  this.showanime = 1;   // 顯示動畫
  setTimeout(() => {
    this.showanime=0; // 3 秒後自動隱藏
  }, 10000);

    this.float();
}













 x = 0;
  y = 0;

  @ViewChild('source') source!: ElementRef<HTMLImageElement>;
  onMouseMove(e: MouseEvent) {
    this.x = (e.clientX / window.innerWidth - 0.5) * 500;
  this.y = (e.clientY / window.innerHeight - 0.5) * 300;
    this.source.nativeElement.style.transform = `translate(-46%, -46%) translate(${this.x}px, ${this.y}px)`;
// console.log(x, y); // 測試用
////////translate=讓滑鼠 位置在螢幕中心左上一點 因為圖片被top left 45%
  }





  float(){
const float = Math.sin(Date.now() / 300) * 8; // 浮動




// const cycle = 5000; // 每 2 秒一個循環
// const progress = (Date.now() % cycle) / cycle; // 0 ~ 1 線性進度 // 線性放大：從 1 到 1.35
// let zoom = 0.5 + progress * 0.3;



this.source.nativeElement.style.transform =`translate(-46%, -46%) translate(${this.x}px, ${this.y}px) translateY(${float}px)` ;
// scale(${zoom})






// 持續呼叫自己 → 背景常駐 requestAnimationFrame(() => this.animate());
requestAnimationFrame(() => this.float());
  }


}


// e.clientX → 滑鼠在視窗內的 水平座標 (左邊是 0，右邊是最大值)。

// window.innerWidth → 視窗的寬度。

// e.clientX / window.innerWidth → 把滑鼠位置換算成 0 ~ 1 的比例。

// 減去 0.5 → 讓中間是 0，左邊是負數，右邊是正數。

// 乘上 100 → 把比例轉成偏移量 (像素)。

