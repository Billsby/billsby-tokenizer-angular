import { Component, OnInit } from '@angular/core';

@Component({
  selector: '[app-header]',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  toggleMenu = false;
  constructor(){ }

  handleToggleMenu(){
    if(this.toggleMenu == false){
      this.toggleMenu = true
    }
    else{
      this.toggleMenu = false
    }
  }

  ngOnInit(): void {
  }

}
