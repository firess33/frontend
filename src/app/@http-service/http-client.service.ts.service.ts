import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpClientServiceTsService {

  constructor(private http:HttpClient) { }

  getApi(url:string) {return this.http.get(url)}//讀取

    postApi(url:string,postData:any ){return this.http.post(url,postData)}//新增

      putApi(url:string,putData:any ) {return this.http.put(url,putData)} //更新

        delApi(url:string){return this.http.delete(url)}



}
