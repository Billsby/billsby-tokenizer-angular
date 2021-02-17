import { Component, OnInit } from '@angular/core';

@Component({
  selector: '[app-card-tokenizer]',
  templateUrl: './card-tokenizer.component.html',
  styleUrls: ['./card-tokenizer.component.css']
})
export class CardTokenizerComponent implements OnInit {
 
  // Declare this so you can use the billsby payment libraries/methods/hooks
  public billsbyTokens = (<any>window).billsbyTokens;
  payment_info= [];
  payment_info2= [];
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
          this.payment_info2 = pmData;
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

  onSubmit(): void{
    this.paymentForm = {
      full_name: this.paymentForm.full_name,
      month: this.paymentForm.month,
      year:  this.paymentForm.year
    };
    this.billsbyTokens.tokenizeCreditCard(this.paymentForm);
    console.log(this.payment_info2);
  }
  
  ngOnInit(): void {
    
  }

}
