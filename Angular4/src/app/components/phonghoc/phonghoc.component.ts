import { Component, OnInit } from '@angular/core';
import {Http,Headers,Response} from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
declare var $:any;

@Component({
  selector: 'app-room',
  templateUrl: './phonghoc.component.html',
  styleUrls: ['./phonghoc.component.css']
})
export class PhonghocComponent implements OnInit {
  [x: string]: any;
  private url="http://localhost:88/rooms";
  dataRooms:any=[];
  isSubmit=true;
  id_PHG = null;
  code_PHG='';
  kinOf_PHG='';
  maxQuantity_PHG=0;
  active = 0;
  constructor(private http:Http) {
    this.getDS();
   }
   data:any={};
   get_room(room:any)
   {
    this.isSubmit=false;
    this.code_PHG=room.code_PHG;
    this.kinOf_PHG=room.kinOf_PHG;
    this.maxQuantity_PHG=room.maxQuantity_PHG;
    this.active = room.active;
    this.id_PHG = room.id_PHG;
    this.data=room;
   }
   onSubmit(formRoom)
   {
    //console.log(formRoom.value);
    this.isSubmit=true;
    const headers=new Headers({'Content-Type':'application/json'});
    this.http.post(this.url,formRoom.value,{headers}).toPromise()
      .then(res=>res.json())
      .then(resJson=>{this.getDS();
      // alert('Insert room success !')
    });
   }
   getDS()
   {
      this.http.get(this.url).map((res:Response)=>res.json()).subscribe(data=>{
      this.dataRooms=data;
      })
   }
   deleteRoom(id:number)
   {
    const headers=new Headers({'Content-Type':'application/json'});
    this.http.delete(this.url+"/"+id,{headers}).toPromise()
      .then(res=>res.json())
      .then(resJson=>{this.getDS();alert('Detele room success !')});
   }
   update_room(formRoom)
   {
    const headers=new Headers({'Content-Type':'application/json'});
    this.http.put(this.url+"/"+ formRoom.value.id_PHG ,formRoom.value,{headers}).toPromise()
      .then(res=>res.json())
      .then(()=>{this.getDS();this.clear();
        // alert('Update room success !')
      });
   }
   clear()
   {
    this.data={};
    this.code_PHG='';
    this.kinOf_PHG='';
    this.id_PHG = null;
    this.maxQuantity_PHG=0;
   }
  ngOnInit() {
    $.getScript("assets/vendor/datatable/datatables.min.js");
    $.getScript("assets/js/front.js");
  }

}
