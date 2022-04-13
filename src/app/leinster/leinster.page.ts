import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular'; //Once import add as arugment in constructor

@Component({
  selector: 'app-leinster',
  templateUrl: './leinster.page.html',
  styleUrls: ['./leinster.page.scss'],
})
export class LeinsterPage implements OnInit {
  
  constructor(private navCtrl: NavController) { } //added arguement in constructor

  ngOnInit() {
  }

   openCountiesPage(){
     this.navCtrl.navigateForward('/leinstercounties'); //display other other page
  }
}
