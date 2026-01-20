import { AdComponent } from './../ad/ad.component';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { HttpClientServiceTsService } from '../@http-service/http-client.service.ts.service';

import { RouterOutlet,Router,RouterLink,RouterLinkActive } from '@angular/router';
import { CommonModule, NgStyle } from '@angular/common';



@Component({
  selector: 'app-main',
  imports: [RouterOutlet, AdComponent, NgStyle],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'

})
export class MainComponent {

  title = 'class5thweatherweb';
showanime=0;

  //  alltodo:string[]=[];
  deleteitem!: string;
  alltodo: { itemname: string; date: string; delete: number }[] = [];


a: any = {};
// a!:form;


  numbercode:number=0;//選區 碼 從按鈕

    test!: string;
  location1!: string;
temperature!:number;
aa1!:number;
perhraa1:form[]=[];
perhraa12:any[]=[];
perhraa13:any[]=[];
bb!:Root;

perhraa4:string[]=[];


aa2!:number;
aa3!:number;
aa4!:number;
aa5!:string;
aa6!:string;

perhraa0:string[]=[];  ////日期時間只需要初始化一次吧.. 接到的資料
dtt:string[]=[]; //轉成 月 日 時
waterdtt:string[]=[];

perhraa2:any[]=[];  ////濕度
perhraa3:any[]=[];  ////體感
perhraa5:any[]=[];   ////     文字
perhraa6:any[]=[]; //文字
perhraa99:any[]=[1,2,3]; //文字



location:string[]=[];

province:number=0;
provincearr:any[]=[];
provinceobj:any[]=[];
min:string[]=[];
max:string[]=[];

timetravel=0;
travelcode=6; //台南
travelprovincename:string='';

  constructor(private http: HttpClientServiceTsService,private router:Router) {
  }
gomain(){
this.router.navigate(['/main'])
 window.scrollTo({ top: 0, behavior: 'smooth' });
}
gorocket(){
this.router.navigate(['/rocket']);
}
gotour(){
this.router.navigate(['/tour']);
}
goad(){
this.router.navigate(['/ad']);

//坐在另一頁了
//  this.showanime = 1;   // 顯示動畫
//   setTimeout(() => {
//     this.showanime=0; // 3 秒後自動隱藏
//      window.scrollTo({ top: 0, behavior: 'smooth' });
//   }, 5000);
}

gotimetravel(){
window.scrollTo({ top: 1400, behavior: 'smooth' });
this.timetravel=1;
this.travelcode= Math.floor(Math.random() * 22) + 1;;

  this.travelprovincename=this.provincearr[this.travelcode];
this.province=this.provincearr[this.travelcode];
this.show_province_temperature(this.travelcode);
}



  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.




     this.http.getApi('https://opendata.cwa.gov.tw/api//v1/rest/datastore/F-D0047-077?Authorization=CWA-5D74EA49-1963-4D18-A108-24902A5C8F24')
      .subscribe((res:any) => {
                // console.log(res);
        // this.location1 = res.records.Locations[0].Location[0].LocationName;
                this.a= res;

                console.log(this.a);

                for(let i=0;i<this.a.records.Locations[0].Location.length;i++){
        this.location[i]=this.a.records.Locations[0].Location[i].LocationName;

      }
 console.log(this.location); ///location是陣列
  // console.log(this.a.records.Locations[0].Location.length   );
//////初始化 numbercode=0 顯示某一區.

for(let i=0;i<55;i++){
       this.perhraa0[i]=this.a.records.Locations[0].Location[0].WeatherElement[0].Time[i].DataTime;

let dt = new Date(this.perhraa0[i]); // 轉成 Date
let month = dt.getMonth() + 1;
let day = dt.getDate();
let hour = dt.getHours();
let all:string=""+month+"月"+day+"日"+hour+"時";
    console.log(all); //只初始化時間一次ok
this.dtt.push(all);


      } //只初始化時間一次ok

console.log(this.perhraa0[0]); //只初始化時間一次ok



for(let i=0;i<31;i++){
       this.perhraa0[i]=this.a.records.Locations[0].Location[0].WeatherElement[7].Time[i].StartTime;

let dt = new Date(this.perhraa0[i]); // 轉成 Date
let month = dt.getMonth() + 1;
let day = dt.getDate();
let hour = dt.getHours();
let all:string=""+month+"月"+day+"日"+hour+"時";
    console.log(all); //只初始化時間一次ok
this.waterdtt.push(all);


      } //只初始化時間一次ok  for降雨機率suck






this.showtemperature(0); ///初始化 必呼叫
this.show_province_temperature(6);//台南 初始化









//                 this.aa1=this.a.records.Locations[0].Location[0].WeatherElement[0].Time[0].ElementValue[0].Temperature;
//                 //溫度   i55 (time)  //從i=0開始存入陣列 但是那邊的資料要time i+1
//                 // this.perhraa1=this.a.records.Locations[0].Location[0].WeatherElement[0].Time;
//                   for(let i=0;i<53;i++){
//         this.perhraa1[i]=this.a.records.Locations[0].Location[0].WeatherElement[0].Time[i+1].ElementValue[0].Temperature;

//       }
// console.log(this.perhraa1);




//                                 this.aa4=this.a.records.Locations[0].Location[0].WeatherElement[7].
//                 Time[0].ElementValue[0].ProbabilityOfPrecipitation;  //下雨機率
//                 // this.perhraa4=this.a.records.Locations[0].Location[0].WeatherElement[7].Time[0].ElementValue[0].ProbabilityOfPrecipitation;

//      for(let i=1;i<28;i++){
//         this.perhraa4[i]=this.a.records.Locations[0].Location[0].WeatherElement[7].Time[i+1].ElementValue[0].ProbabilityOfPrecipitation;

//       }
// console.log(this.perhraa4);
// //  this.perhraa4=this.a.records.Locations[0].Location[0].WeatherElement[7].Time[20].ElementValue[0].ProbabilityOfPrecipitation;
// //  console.log('aaaaaaa');
// // console.log(this.perhraa4);









//                 ////以下只抓 8 倍數 0=當天12點半夜   8=當天晚上八點先! 然後 早上八點 隔天晚上八點  1 2 2 (第三天早晚end 共五個 then. ~48

//                 this.aa2=this.a.records.Locations[0].Location[0].WeatherElement[2].Time[8].ElementValue[0].RelativeHumidity; //濕度
//                 // this.perhraa2=this.a.records.Locations[0].Location[0].WeatherElement[2].Time;


//                     for(let i=0;i<4;i++){
//         this.perhraa2[i]=this.a.records.Locations[0].Location[0].WeatherElement[2].Time[i*8].ElementValue[0].RelativeHumidity;

//       }



//        ////以下只抓  (中午12點)和13 26 39  倍數 三點中午s


//                 this.aa3=this.a.records.Locations[0].Location[0].WeatherElement[3].Time[0].ElementValue[0].ApparentTemperature;//體感
//                 // this.perhraa3=this.a.records.Locations[0].Location[0].WeatherElement[3].Time;
//        for(let i=1;i<4;i++){
//         this.perhraa3[i]=this.a.records.Locations[0].Location[0].WeatherElement[3].Time[i*12].ElementValue[0].ApparentTemperature;
//         console.log('我是體感x3'+ this.perhraa3[i]);
//       }




//                 this.aa5=this.a.records.Locations[0].Location[0].WeatherElement[8].
//                 Time[0].ElementValue[0].Weather; //描述 現象 和降雨機率
//                 // this.perhraa5=this.a.records.Locations[0].Location[0].WeatherElement[8].Time;
//     for(let i=1;i<4;i++){
//         this.perhraa5[i]=this.a.records.Locations[0].Location[0].WeatherElement[8].Time[i*10].ElementValue[0].Weather;
//         console.log('我是文字x3'+ this.perhraa5[i]);
//       }

//                 this.aa6=this.a.records.Locations[0].Location[0].WeatherElement[9].
//                 Time[0].ElementValue[0].WeatherDescription; //描述 現象 和文字
//                 // this.perhraa6=this.a.records.Locations[0].Location[0].WeatherElement[9].Time;

//                    for(let i=1;i<4;i++){
//         this.perhraa6[i]=this.a.records.Locations[0].Location[0].WeatherElement[9].Time[i*10].ElementValue[0].WeatherDescription;
//         console.log('我是文字x3'+ this.perhraa6[i]);
//       }

       });
















 this.http.getApi('https://opendata.cwa.gov.tw/api/v1/rest/datastore/F-C0032-001?Authorization=CWA-5D74EA49-1963-4D18-A108-24902A5C8F24')
      .subscribe((res:any) => {
         this.bb= res;

console.log(this.bb);

   for(let i=0;i<this.bb.records.location.length;i++){
       this.provincearr[i]=this.bb.records.location[i].locationName;
      } ///初始化取得所有縣市 代號數字和名稱

for(let i=0;i<3;i++){
this.min.push(this.bb.records.location[this.province].weatherElement[2].time[i].parameter.parameterName);  // 0~2
this.max.push(this.bb.records.location[this.province].weatherElement[4].time[i].parameter.parameterName);  // 0~2
}

console.log("aacccx");
console.log(this.bb.records.location[this.province]);
console.log(""+this.min+this.max);
console.log("我是");
console.log(this.provincearr);
  });




  } ///ngoninit















  delete() {
    this.alltodo.pop()

  }

  show_province_temperature(number:number){
this.min=[];
this.max=[];
this.province=number;
  console.log('選擇的縣市');
console.log(this.province);

for(let i=0;i<3;i++){
this.min.push(this.bb.records.location[this.province].weatherElement[2].time[i].parameter.parameterName);  // 0~2
this.max.push(this.bb.records.location[this.province].weatherElement[4].time[i].parameter.parameterName);  // 0~2
}

  }


showtemperature(number:number){
  ////choose set number  and //refresh all data first then refresh page

this.perhraa1=[];
this.perhraa2=[];
this.perhraa3=[];
this.perhraa4=[];

this.perhraa5=[];
this.perhraa6=[];



  this.numbercode=number;
  console.log('選擇的區碼');
console.log(this.numbercode);


 this.http.getApi('https://opendata.cwa.gov.tw/api/v1/rest/datastore/F-D0047-077?Authorization=CWA-5D74EA49-1963-4D18-A108-24902A5C8F24')
      .subscribe((res:any) => {
         this.a= res;

          this.aa1=this.a.records.Locations[0].Location[this.numbercode].WeatherElement[0].Time[0].ElementValue[0].Temperature;
                //溫度   i55 (time)  //從i=0開始存入陣列 但是那邊的資料要time i+1
                // this.perhraa1=this.a.records.Locations[0].Location[0].WeatherElement[0].Time;
                  for(let i=0;i<52;i++){
        this.perhraa1[i]=this.a.records.Locations[0].Location[this.numbercode].WeatherElement[0].Time[i+1].ElementValue[0].Temperature;

      }
console.log(this.perhraa1);




//       for(let i=12;i<36;i++){
//         this.perhraa12[i]=this.a.records.Locations[0].Location[this.numbercode].WeatherElement[0].Time[i+1].ElementValue[0].Temperature;


//       }
// console.log('bbbbb');


//       for(let i=36;i<52;i++){
//        this.perhraa13[i]=this.a.records.Locations[0].Location[this.numbercode].WeatherElement[0].Time[i+1].ElementValue[0].Temperature;

//       }
// console.log('ccccbb');









                                this.aa4=this.a.records.Locations[0].Location[0].WeatherElement[7].
                Time[0].ElementValue[0].ProbabilityOfPrecipitation;  //下雨機率
                // this.perhraa4=this.a.records.Locations[0].Location[0].WeatherElement[7].Time[0].ElementValue[0].ProbabilityOfPrecipitation;

     for(let i=1;i<31;i++){
        this.perhraa4.push(this.a.records.Locations[0].Location[this.numbercode].WeatherElement[7].Time[i+1].ElementValue[0].ProbabilityOfPrecipitation) ;

      }
console.log(this.perhraa4);
//  this.perhraa4=this.a.records.Locations[0].Location[0].WeatherElement[7].Time[20].ElementValue[0].ProbabilityOfPrecipitation;
//  console.log('aaaaaaa');
// console.log(this.perhraa4);














                ////以下只抓 8 倍數 0=當天12點中午   12=隔天凌晨     24        36 48

                this.aa2=this.a.records.Locations[0].Location[0].WeatherElement[2].Time[8].ElementValue[0].RelativeHumidity; //濕度
                // this.perhraa2=this.a.records.Locations[0].Location[0].WeatherElement[2].Time;


                    for(let i=0;i<5;i++){

      this.perhraa2.push(this.a.records.Locations[0].Location[this.numbercode].WeatherElement[2].Time[i*12].ElementValue[0].RelativeHumidity);
      }



       ////以下只抓  (中午12點)和13 26 39  倍數 三天中午s


                this.aa3=this.a.records.Locations[0].Location[0].WeatherElement[3].Time[0].ElementValue[0].ApparentTemperature;//體感
                // this.perhraa3=this.a.records.Locations[0].Location[0].WeatherElement[3].Time;
       for(let i=0;i<5;i++){
        this.perhraa3.push(this.a.records.Locations[0].Location[this.numbercode].WeatherElement[3].Time[i*12].ElementValue[0].ApparentTemperature );
        console.log(this.a.records.Locations[0].Location[this.numbercode].WeatherElement[3].Time[i*12].ElementValue[0].ApparentTemperature);

      }
 console.log('我是體感x3'+ this.perhraa3);



                this.aa5=this.a.records.Locations[0].Location[0].WeatherElement[8].
                Time[0].ElementValue[0].Weather; //描述 現象 和降雨機率
                // this.perhraa5=this.a.records.Locations[0].Location[0].WeatherElement[8].Time;
    for(let i=0;i<3;i++){
        this.perhraa5.push(this.a.records.Locations[0].Location[this.numbercode].WeatherElement[8].Time[i*8].ElementValue[0].Weather);
        console.log('我是文字x3'+ this.perhraa5);
      }

                this.aa6=this.a.records.Locations[0].Location[0].WeatherElement[9].
                Time[0].ElementValue[0].WeatherDescription; //描述 現象 和文字
                // this.perhraa6=this.a.records.Locations[0].Location[0].WeatherElement[9].Time;

                   for(let i=0;i<3;i++){
        this.perhraa6.push(this.a.records.Locations[0].Location[this.numbercode].WeatherElement[9].Time[i*8].ElementValue[0].WeatherDescription);
        console.log('我是文字x3'+ this.perhraa6);
      }

















           });

}///這是再showtemperature的括號
}









 interface form{
records:form2
}

interface form2{
Locations?:form3[]
}

interface form3{
Location?:form4[]
}

interface form4{
WeatherElement?:form6[]
}



interface form6{
Time?:form7[]
}

interface form7{
ElementValue?:form8[]
}

interface form8{
Temperature?:number;
}







export interface Root {
  success: string
  result: Result
  records: Records
}

export interface Result {
  resource_id: string
  fields: Field[]
}

export interface Field {
  id: string
  type: string
}

export interface Records {
  datasetDescription: string
  location: Location[]
}

export interface Location {
  locationName: string
  weatherElement: WeatherElement[]
}

export interface WeatherElement {
  elementName: string
  time: Time[]
}

export interface Time {
  startTime: string
  endTime: string
  parameter: Parameter
}

export interface Parameter {
  parameterName: string
  parameterValue?: string
  parameterUnit?: string
}
