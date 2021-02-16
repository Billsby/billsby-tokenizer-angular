import { Component, OnInit } from '@angular/core';

@Component({
  selector: '[app-card-tokenizer]',
  templateUrl: './card-tokenizer.component.html',
  styleUrls: ['./card-tokenizer.component.css']
})
export class CardTokenizerComponent implements OnInit {
  public name = "Francis";
  
  constructor() { }

  ngOnInit(): void {
  }

}
