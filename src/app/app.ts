import { AfterViewInit, Component, OnChanges,OnDestroy,OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet, RouterModule, Router } from '@angular/router';
import { StudentDetails } from './model/student';
import { Student } from './student';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit,OnDestroy {
  //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
  //Add 'implements AfterViewInit' to the class.
  

private studentsub:Subscription|undefined;
  list: boolean = false;

  studentList:Array<StudentDetails>=[];
  // apistudents: Array<any> = [];

  // addStudent:Array<any>=[{id:4,name:"student4",course:"bca",age:33}];

  constructor(private router: Router,
    private studentService: Student) {
      
    }


    ngOnInit() {
    
     this.getStudentDetails();

      
    }

   getStudentDetails(): void {
    this.studentsub=this.studentService.getStudents().subscribe((res) => {
      this.studentList =res;
      console.log(this.studentList);
    });
  }
  ngOnDestroy(): void {
    console.log("ngOnDestroy active aayi!");
    if(this.studentsub)
    {
      this.studentsub.unsubscribe();
      console.log("student destroyed");
    }
  }
  // ngAfterViewInit(): void {
  //   console.log("full complete")

  //   alert("completed");
  // }

  delete(i: number): void {
    this.studentList.splice(i, 1);
  }

  details(id:number,name:string):void{

    this.router.navigate(['/details',id,name]);

  }
}

//   add(): void {
//     // this.list = false;
//     // this.router.navigate(['/addstudent']);
//     // this.studentList.push(this.addStudent[0]);

//     let adDetails = {
//       id: 3,
//       name: "iza",
//       course: "bca",
//       age: 12,
//       class: this.studentService.class,
      
//     }
//     this.studentList.push(adDetails);


//   }


// }
