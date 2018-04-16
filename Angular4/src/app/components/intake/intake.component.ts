import { Component, OnInit } from '@angular/core'
import {Http,Headers,Response, RequestOptions} from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import { FormsModule, Form, FormGroup, FormControl,FormBuilder, Validators } from '@angular/forms';
import { Pipe, PipeTransform } from '@angular/core';
import { DatePipe } from '@angular/common';
import { empty } from 'rxjs/Observer';

declare var $:any;
@Component({
  selector: 'app-intake',
  templateUrl: './intake.component.html',
  styleUrls: ['./intake.component.css']
  
})

export class IntakeComponent{
  private url = "http://localhost:88/intakes/";
  show:any;
  show2:any;
  kiemtra2 = false;
  kiemtra = false;
  dataIntakes:any = [];
  name_ITK ='';
  dayStart_ITK=new Date();
  dayEnd_ITK=new Date();
  maxQuantity_ITK=1;
  status_ITK:any;
  id_ITK = null;
  CurrentDate=new Date();
  abc=new Date();
  opValue = -1;
  constructor(private http:Http) {
    this.list_data_intakes();
  }
  keyup(value:string)
  {
    if(this.dataIntakes.findIndex(i=>i.name_ITK==value)!= -1)
    {
      // console.log(this.dataIntakes.findIndex(i=>i.name_ITK==value));
      this.show2 = 'Bị trùng với cơ sở dữ liệu';
      this.kiemtra=false;
    }     
    else if(this.dataIntakes.findIndex(i=>i.name_ITK==value)== -1)
    {
      // console.log(this.dataIntakes.findIndex(i=>i.name_ITK==value));
      // this.show2 = 'Được dùng';
      this.kiemtra=true;
    }
  }
  //kiem tra ngay
  check()
  {
    var datePipe2 = new DatePipe("en-US");
    return datePipe2.transform(this.CurrentDate.toString(), 'yyyy-MM-dd');
  }
  //them du lieu
  onSubmit(formIntakes){
    formIntakes.value.status_ITK = $('#stt :selected').val();
    console.log(formIntakes.value);
    if(this.dayStart_ITK==this.dayEnd_ITK)
    {
      alert("Ngày bắt đầu và ngày kết thúc không bằng nhau.");
    }
    else if(this.dayStart_ITK > this.dayEnd_ITK)
    {
      alert("Ngày bắt đầu phải bé hơn ngày kết thúc.");
    }
    else
    {
      //console.log(formIntakes.value)
      const headers = new Headers({'Content-Type':'application/json'});
      this.http.post(this.url,formIntakes.value,{headers}).toPromise()
        .then(res=>res.json())
        .then(resJson=>this.list_data_intakes());
      
     
    }      
  }
  Reset(formIntakes)
  {
    formIntakes.reset();
  }
  //lay du lieu
  list_data_intakes(){
    this.http.get(this.url).map((res:Response)=>res.json()).subscribe(data=>{
    this.dataIntakes = data;
    })
  }
  //xoa du lieu
  deleteIntakes(id:number)
  {
    let headers=new Headers({'Content-Type':'application/json'});
    let options = new RequestOptions({ headers: headers });
    this.http.delete(this.url+"/"+id).toPromise()
      .then(res=>res.json())
      .then(resJson=>this.list_data_intakes());
  }
  //lay du lieu len modal edit
  getupdateIntakes(intakes:any)
  {
    var datePipe = new DatePipe("en-US");
    intakes.dayStart_ITK = datePipe.transform(intakes.dayStart_ITK, 'yyyy-MM-dd');
    intakes.dayEnd_ITK =datePipe.transform(intakes.dayEnd_ITK, 'yyyy-MM-dd');
    this.name_ITK = intakes.name_ITK;
    this.dayStart_ITK = intakes.dayStart_ITK;
    this.dayEnd_ITK = intakes.dayEnd_ITK;
    this.maxQuantity_ITK = intakes.maxQuantity_ITK;
    this.status_ITK = intakes.status_ITK;
    this.id_ITK = intakes.id_ITK;
  }
  
  updateIntakes(formEditIntakes)
  {
    if(this.dayStart_ITK==this.dayEnd_ITK)
    {
      alert("Ngày bắt đầu và ngày kết thúc không được bằng nhau");
      
    }
    else if(this.dayStart_ITK > this.dayEnd_ITK)
    {
      alert("Ngày bắt đầu phải bé hơn ngày kết thúc.");
    }
    else
    {
      //console.log(formEditIntakes.value);
      let headers=new Headers({'Content-Type':'application/json'});
      let options = new RequestOptions({ headers: headers });
      this.http.put(this.url+"/"+formEditIntakes.value.id_ITK,formEditIntakes.value).toPromise()
        .then(res=>res.json())
        .then(resJson=>this.list_data_intakes());
        
    } 
  }

  ngOnInit(): void {
    $.getScript("assets/vendor/datatable/datatables.min.js");
    $.getScript("assets/js/front.js");
    var that = this;
    $('#stt').select2().on("change",function(){ 
      that.opValue = $('#stt').val();
    });
  
  }

}
