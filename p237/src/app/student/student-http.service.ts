import { Injectable } from '@angular/core';
import { Http } from "@angular/http";
import { student } from './student.model';

@Injectable({
  providedIn: 'root'
})
export class StudentHttpService {

  constructor(private http: Http) { }

  getDatas(): Promise<student[]> {
    // get 함수가 리턴하는 Observable 객체를
    // toPromise 함수에서 Promise 객체로 변경한다.
    return this.http.get('./assets/server/student.json')
      .toPromise().then(res => {
        console.log(res);
        // res.json(): 데이터를 추출한다.
        // res.json().info.idols: 필요한 데이터만 추출 리턴
        return res.json().info.datas;
      });
  }
}
