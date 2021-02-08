import { Component, OnInit } from '@angular/core';
import {AppareilService} from './services/appareil.service';

@Component({
  selector: 'app-appareil-view',
  templateUrl: './appareil-view.component.html',
  styleUrls: ['./appareil-view.component.css']
})
export class AppareilViewComponent implements OnInit {

 isAuth = false;

  //lastUpdate= new Date();
  lastUpdate= new Promise<Date>(
    (resolve, reject)=>{
      const date=new Date();
      setTimeout(
        () => {
          resolve(date);
        }, 2000
      );
    }
  )

  appareils: any[];

  //appareilOne = 'Machine à laver';
  //appareilTwo = 'Télévision';
  //appareilThree = "Ordinateur";
  constructor(private appareilService: AppareilService){
    setTimeout(
      ()=>{
        this.isAuth=true;
      },4000
    );
  }

  ngOnInit(){
  this.appareils=this.appareilService.appareils;  
  }
  onAllumer(){
    this.appareilService.switchOnAll();
  }

   onEteindre(){
    this.appareilService.switchOffAll();
  }

}