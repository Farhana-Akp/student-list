import { Component } from '@angular/core';
import { ActivatedRoute, } from '@angular/router';

@Component({
  selector: 'app-studentcomponent',
  standalone:true,
  imports: [],
  templateUrl: './studentcomponent.html',
  styleUrl: './studentcomponent.css',
})
export class Studentcomponent {

studentid:any;
studentname:any;
  constructor(private route:ActivatedRoute){}

ngOnInit(): void {
  
  this.route.paramMap.subscribe(params=>{
     this.studentid=params.get('id');
          this.studentname=params.get('name');

     console.log(this.studentid);
     console.log(this.studentname);

  });

}
}
