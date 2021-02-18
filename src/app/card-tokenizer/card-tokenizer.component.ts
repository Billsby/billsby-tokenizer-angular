import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';
import { takeWhile } from 'rxjs/operators';

@Component({
  selector: '[app-card-tokenizer]',
  templateUrl: './card-tokenizer.component.html',
})
export class CardTokenizerComponent implements OnInit {
 
  // Declare this so you can use the billsby payment libraries/methods/hooks
  billsbyTokens = (<any>window).billsbyTokens;
  set_payment_info= '';
  get_payment_info= '';
  boboka=[];
  constructor() { 
    
    if(this.billsbyTokens) {
      this.billsbyTokens.init("billsby-number", "billsby-cvv");
      this.billsbyTokens.on("ready", function () {
        const submitButton = document.getElementById("submit-button");
        
      });
      this.billsbyTokens.on("errors", function (errors: any) {
          for (var i = 0; i < errors.length; i++) {
            var error = errors[i];
            console.log(error);
          }
        });
      this.billsbyTokens.on("paymentMethod",  ( token: any, pmData: any) => {
        this.set_payment_info = pmData;
          console.log(token);
          console.log(pmData);
        });
    
    }
  }
  
  public paymentForm = {
    full_name: null,
    month: null,
    year: null,
  };

  // Once clicked submit button
  onSubmit(): void{
    this.paymentForm = {
      full_name: this.paymentForm.full_name,
      month: this.paymentForm.month,
      year:  this.paymentForm.year
    };
    this.billsbyTokens.tokenizeCreditCard(this.paymentForm);

    // Will update data in view
    let stop = false;
    interval(900)
    .pipe(takeWhile(() => !stop))
    .subscribe(() => {
        this.get_payment_info = JSON.stringify(this.set_payment_info, undefined, 4)
          .replace(/ /g, '&nbsp;')
          .replace(/\n/g, '<br/>');
    });
  }
  
  ngOnInit(): void {
    
   
  }

}
