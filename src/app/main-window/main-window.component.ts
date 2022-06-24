import { Component, OnInit,ViewChild } from '@angular/core';
// import { Task } from '../Model/task';
import { TaskServiceService } from '../task-service.service';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-main-window',
  templateUrl: './main-window.component.html',
  styleUrls: ['./main-window.component.css'],
})
export class MainWindowComponent implements OnInit {
  // todos: Task[] = [];
  closeResult: any;
  

  constructor(
    public taskservice : TaskServiceService,
    private modalService: NgbModal
  ) {}

  // open(content:any,i:number) {
  //   this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
  //     this.closeResult = `Closed with: ${result}`;
  //   }, (reason) => {
  //     this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
  //   });
  //   let title = this.taskservice.todos[i].taskname;
  //   let result = prompt('Edit Task Title', title);
   
  // }
  
  // private getDismissReason(reason: any): string {
  //   if (reason === ModalDismissReasons.ESC) {
  //     return 'by pressing ESC';
  //   } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
  //     return 'by clicking on a backdrop';
  //   } else {
  //     return  `with: ${reason}`;
  //   }
  // }

  addTaskValue: string = '';

  ngOnInit(): void {}
  @ViewChild('TaskForm') TaskForm!: NgForm;

  onSubmit() {
    this.taskservice.todos.push({
      taskname: this.TaskForm?.value.task
      
    });
    


    this.addTaskValue = '';
  }

  deleteTask(i: number) {
    this.taskservice.todos.splice(i, 1);
  }

  editTask(i: number) {
    let title = this.taskservice.todos[i].taskname;
    let result = prompt('Edit Task Title', title);
    if (result !== null && result !== '') {
      this.taskservice.todos[i].taskname = result;
    }
  }
}
