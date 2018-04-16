import { Component, OnInit } from '@angular/core';
import {Http,Headers,Response, RequestOptions} from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import { FormsModule, Form, FormGroup, FormControl,FormBuilder, Validators } from '@angular/forms';
import { Pipe, PipeTransform } from '@angular/core';
import { DatePipe } from '@angular/common';
declare var $:any;
@Component({
  selector: "app-major",
  templateUrl: './major.component.html',
  styleUrls: ['./major.component.css']
})
export class MajorComponent implements OnInit {
  show:any;
  kiemtra=false;
  //[x: string]: any;
  private url = "http://localhost:88/majors";
  dataMajor:any = [];
  id_MJR = null;
  code_MJR:string = '';
  name_MJR:string = '';
  status_MJR = 0;
  constructor(private http:Http) {
    this.list_data_major();
  }
  keyup(value:string)
  {
    if(this.dataMajor.findIndex(i=>i.code_MJR==value)!= -1)
    {
      //console.log(this.dataMajor.findIndex(i=>i.code_MJR==value));
      this.show = 'Bị trùng với cơ sở dữ liệu';
      this.kiemtra=false;
    }
      
    else if(this.dataMajor.findIndex(i=>i.code_MJR==value)== -1)
    {
      //console.log(this.dataMajor.findIndex(i=>i.code_MJR==value));
      this.show = 'Được dùng';
      this.kiemtra=true;
    }
  }
  //add data
  onSubmit(formMajor){
    //console.log(formSubject.value);
    if(formMajor == false)
    {
      alert("Có lỗi xảy ra");
    }
    else
    {
      console.log(formMajor.value)
      const headers = new Headers({'Content-Type':'application/json'});
      this.http.post(this.url,formMajor.value,{headers}).toPromise()
        .then(res=>res.json())
        .then(resJson=>this.list_data_major());
    }
   
    
  }
  //clear
  reset(formMajor)
  {
    formMajor.reset();
  }
  //data subject list
  list_data_major(){
    this.http.get(this.url).map((res:Response)=>res.json()).subscribe(data=>{
    this.dataMajor = data;
    })
  }
  //delete data id
  deleteMajor(id:number)
  {

    let headers=new Headers({'Content-Type':'application/json'});
    let options = new RequestOptions({ headers: headers });
    this.http.delete(this.url+"/"+id).toPromise()
      .then(res=>res.json())
      .then(resJson=>this.list_data_major());

  }
  //data get update
  getupdateMajor(major:any)
  {
    this.code_MJR = major.code_MJR;
    this.name_MJR= major.name_MJR;
    this.status_MJR = major.status_MJR;
    this.id_MJR = major.id_MJR;
  }
  //data update
  updateMajor(formEditMajor)
  {
    if(formEditMajor == true)
    {
      alert("Có lỗi xảy ra");
    }
    else
    {
      let headers=new Headers({'Content-Type':'application/json'});
      let options = new RequestOptions({ headers: headers });
      this.http.put(this.url+"/"+formEditMajor.value.id_MJR,formEditMajor.value).toPromise()
        .then(res=>res.json())
        .then(resJson=>this.list_data_major());
    }
  }

  ngOnInit() {
    $.getScript("assets/vendor/datatable/datatables.min.js");
    $.getScript("assets/js/front.js");
  }

}
