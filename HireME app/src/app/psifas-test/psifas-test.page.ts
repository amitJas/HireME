import { StationService } from './../station-service/station.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-psifas-test',
  templateUrl: './psifas-test.page.html',
  styleUrls: ['./psifas-test.page.scss'],
})
export class PsifasTestPage implements OnInit {

  public candidateName:string;
  public interviewer:string;
  public test:any
  public grade: any;
  public userSetTest:string;
  public userSetGrade:string;
  public pass:boolean;
  public candidate = null
  public progressCount = 0
  constructor(public station: StationService) { }

  ngOnInit() {
    this.candidate = this.station.candidate;
    this.station.candidate[this.station.currStationName] ? this.progressCount = this.station.candidate[this.station.currStationName] : this.progressCount = 0
    setTimeout( () =>{
      this.initPsifas()
    },500)
  }

  initPsifas(){
    
    if(this.station.station.test){
      this.test = this.station.station.test.data
      this.userSetTest = this.station.station.test.how
    }
    if(this.station.station.grade){
      this.grade = this.station.station.grade.data
      this.userSetGrade = this.station.station.grade.how
    }
    
  }

  savePsifas(data, num){
    console.log(data, num)
    num == 1 ? (this.station.setFile('test',data),this.progressCount++): null
    num == 2 ? (this.station.setFile('grade',data),this.progressCount++) : null
    this.station.calculateStationProgress(this.progressCount)
  }
}
