import { Component, OnInit } from '@angular/core'
import {Http,Headers,Response, RequestOptions} from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import { FormsModule, FormGroup } from '@angular/forms';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';
declare var $:any;

@Component({
  selector: "app-subject",
  templateUrl: "./subject.component.html",
  styleUrls: ['./subject.component.css'],
})

export class SubjectComponent implements OnInit {
  show:any;
  //[x: string]: any;
  private url = "http://localhost:88/subjects";
  dataSubject:any = [];
  id_SBJ = null;
  code_SBJ:string = '';
  name_SBJ:string = '';
  hour_SBJ = 0;
  status_SBJ = 0;
  kindOfRoom = '';
 
  constructor(private http:Http) {
    this.list_data_subject();
  }
  kiemtra=false;
  keyup(value: string){
    
    if(this.dataSubject.findIndex(i=>i.code_SBJ==value)!= -1)
    {
      console.log(this.dataSubject.findIndex(i=>i.code_SBJ==value));
      this.show = 'Bị trùng với cơ sở dữ liệu';
      this.kiemtra=false;
    }
      
    else if(this.dataSubject.findIndex(i=>i.code_SBJ==value)== -1)
    {
      console.log(this.dataSubject.findIndex(i=>i.code_SBJ==value));
      this.show = 'Được dùng';
      this.kiemtra=true;
    }
  }
  Reset(formSubject)
  {
    formSubject.reset();
  }
  //add data
  onSubmit(formSubject){
    //console.log(formSubject.value);
    if(formSubject == false)
    {
      alert("Có lỗi xảy ra");
    }
    else
    {
      console.log(formSubject);
      const headers = new Headers({'Content-Type':'application/json'});
      this.http.post(this.url,formSubject.value,{headers}).toPromise()
        .then(res=>res.json())
        .then(resJson=>this.list_data_subject());
        console.log("ok");      
    }

  }
  //data subject list
  list_data_subject(){
    this.http.get(this.url).map((res:Response)=>res.json()).subscribe(data=>{
    this.dataSubject = data;
    })
  }
  //delete data id
  deleteSubject(id:number)
  {
    let headers=new Headers({'Content-Type':'application/json'});
    let options = new RequestOptions({ headers: headers });
    this.http.delete(this.url+"/"+id).toPromise()
      .then(res=>res.json())
      .then(resJson=>this.list_data_subject());
  }
  //data get update
  getupdateSubject(subject:any)
  {
    this.code_SBJ = subject.code_SBJ;
    this.name_SBJ = subject.name_SBJ;
    this.hour_SBJ = subject.hour_SBJ;
    this.status_SBJ = subject.status_SBJ;
    this.kindOfRoom = subject.kindOfRoom;
    this.id_SBJ = subject.id_SBJ;
  }
  //data update
  updateSubject(formEditSubject)
  { 
    let headers=new Headers({'Content-Type':'application/json'});
    let options = new RequestOptions({ headers: headers });
    this.http.put(this.url+"/"+formEditSubject.value.id_SBJ,formEditSubject.value).toPromise()
      .then(res=>res.json())
      .then(resJson=>this.list_data_subject());
  }

  ngOnInit(){
    $.getScript("assets/vendor/datatable/datatables.min.js");
    $.getScript("assets/js/front.js");
    $.getScript("assets/js/subject.js");
  }

}
