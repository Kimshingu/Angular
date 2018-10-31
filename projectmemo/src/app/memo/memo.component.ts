import { Component, OnInit } from '@angular/core';
import { MemoHttpService } from './memo-http.service';
import { Memo } from './Memo.model';

@Component({
  selector: 'app-memo',
  templateUrl: './memo.component.html',
  styleUrls: ['./memo.component.css']
})
export class MemoComponent implements OnInit {

  employees: any = [
      {"id":1, "writer":"Tom", "content":"Be happy", "date":"20180921"},
      {"id":2, "writer":"John", "content":"Be happy", "date":"20180921"},
      {"id":3, "writer":"David", "content":"Be happy", "date":"20180921"}
    ];
  errorMessage: string;

  constructor(private empHttpService: MemoHttpService) { }

  ngOnInit() {
    this.getEmps();
   }

  getEmps() {
    // getEmps() 메소드는 Observable 객체를 리턴한다.
    // 신문사   - 구독자 패턴
    // Publish - subscribe
    // subject - Observable
      this.empHttpService.getEmps().subscribe(
        emps=> this.employees = emps, // 성공 콜백
        error => this.errorMessage = <any>error // 실패 콜백
      );
   }

  addEmp(writer: string, content: string, date:string) {
    alert('addEmp() # ' + writer + ' ' + content+ ' ' + date);
  }

  removeEmp(person: any) {
    alert(JSON.stringify(person));

    let id = person.id;
    // 원격서버에 삭제를 요청해서 정상응답을 받으면
    // 컴포넌트 객체가 가진 배열에서 삭제합니다.

    this.empHttpService.removeEmp(person)
    .subscribe(
      noResponse =>{ // 성공 콜백
        let targetIndex = this.employees.findIndex(emp => emp.id === id);
        this.employees.splice(targetIndex, 1);
      },
      error => this.errorMessage = <any>error // 실패 콜백
    );

    return false;
    // preventDefault
    // stopPropagation
  }

  onSubmit(f) {
    if (f.valid) {
      var emp = f.value;
      console.log(emp);
      alert('onSubmit() # ' + emp.writer + ' ' + emp.content  + ' ' + emp.date);

      this.empHttpService.addEmp(emp.writer, emp.content, emp.date)
      .subscribe(
        res => { // 성공 콜백
          this.employees.push({
            id: res.id,
            writer: emp.writer,
            content: emp.content,
            date: emp.date
          });
        },

        error => this.errorMessage = <any>error // 실패 콜백
      );
    }
  }

}
