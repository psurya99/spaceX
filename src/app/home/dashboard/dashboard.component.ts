import { Component, OnInit } from '@angular/core';
import {DataserviceService} from '../../services/dataservice.service';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  items:any=[];
  launchYears:any;
  Years:any;
  selectedYear: any;
  selectedFlagSS:any;
  selectedFlagLand:any;
  dataitems:any;

  YearInfo:any=[2006,2007,2008,2009,2010,2011,2012,2013,2014,2015,2016,2017,2018,2019,2020];
  criteria :any=['true','false'];
  constructor( private dataservice:DataserviceService) { }

  ngOnInit(){
    this.getAll();
  }

  getAll(): void {
    this.dataservice.getInfo().subscribe( (data:any) =>{
      this.dataitems=data;
      });
 }

 onSelect(year: number): void {
  this.selectedYear=year;
  //this.slectedFlag=launch_ss;
  //this.slectedFlag=launch_land;
  console.log("Selected Year  => " +this.selectedYear);
  this.dataservice.getYearInfo(this.selectedYear).subscribe( (data:any) =>{
    this.dataitems=data;
  });
  }

  onSelectLandingSS(flag:boolean){
    this.selectedFlagLand=flag;
  //  this.dataservice.getlandingSucess(this.selectedFlagLand)
  }

  onSelectLanchSS(flag:boolean){
    this.selectedFlagSS=flag;
    this.dataservice.getlaunchingSucess(this.selectedFlagSS)
  }
  

}

    




