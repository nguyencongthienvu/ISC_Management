import { Component, OnInit } from '@angular/core';
import {Http,Headers,Response} from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
declare var $:any;
@Component({
  selector: 'app-school',
  templateUrl: './school.component.html',
  styleUrls: ['./school.component.css']
})
export class SchoolComponent implements OnInit {

  [x: string]: any;
  private url="http://localhost:88/schools";
  dataSchools:any=[];
  isSubmit=true;  // chua hieu
  id_SCL = null;
  code_SCL='';
  name_SCL='';
  address_SCL='';
  contact_SCL='';
  status_SCL = 0;
  constructor(private http:Http) {
    this.getDS();
   }
   data:any={};
   get_school(school:any)
   {
    this.isSubmit=false;
    this.code_SCL=school.code_SCL;
    this.name_SCL=school.name_SCL;
    this.address_SCL=school.address_SCL;
    this.contact_SCL = school.contact_SCL;
    this.status_SCL = school.status_SCL;
    this.id_SCL = school.id_SCL;
    this.data=school;
   }
   onSubmit(formSchool)
   {
    //console.log(formRoom.value);
    this.isSubmit=true;
    const headers=new Headers({'Content-Type':'application/json'});
    this.http.post(this.url,formSchool.value,{headers}).toPromise()
      .then(res=>res.json())
      .then(resJson=>{this.getDS();
      // alert('Insert school success !')
    });
   }
   getDS()
   {
      this.http.get(this.url).map((res:Response)=>res.json()).subscribe(data=>{
      this.dataSchools=data;
      })
   }
   delete_school(id:number)
   {
    const headers=new Headers({'Content-Type':'application/json'});
    this.http.delete(this.url+"/"+id,{headers}).toPromise()
      .then(res=>res.json())
      .then(resJson=>{this.getDS();alert('Detele school success !')});
   }
   update_school(formSchool)
   {
    const headers=new Headers({'Content-Type':'application/json'});
    this.http.put(this.url+"/"+ formSchool.value.id_PHG ,formSchool.value,{headers}).toPromise()
      .then(res=>res.json())
      .then(()=>{this.getDS();this.clear();
        // alert('Update school success !')
      });
   }
   clear()
   {
    this.data={};
    this.code_SCL='';
    this.name_SCL='';
    this.address_SCL='';
    this.contact_SCL='';
    this.id_SCL = null;
    this.status_SCL=0;
   }
  ngOnInit() {
    $.getScript("assets/vendor/datatable/datatables.min.js");
    $.getScript("assets/js/front.js");
  }

}
