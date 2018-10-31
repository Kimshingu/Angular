import { Component, OnInit } from '@angular/core';
import { StudentHttpService } from './student-http.service';
import { student } from './student.model';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {



  datas: student[];
  constructor(private StudentHttpService: StudentHttpService) { }
  ngOnInit() {
    this.StudentHttpService.getDatas()
      .then(datas => this.datas = datas)
      .catch(err => console.log(err));
  }

}
