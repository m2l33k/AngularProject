import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-add-apartment',
  templateUrl: './add-apartment.component.html',
  styleUrls: ['./add-apartment.component.css']
})
export class AddApartmentComponent {


  addapartement:FormGroup
  constructor(private fb:FormBuilder) { 
    this.addapartement=this.fb.group({
      apartNum:[''],
      floorNum:[''],
      surface:[''],
      terrace:['yes'],
      surfaceterrace:[''],
      category:['S+1'],
      ResidenceId:['']
    })
  }

}
