import { Component, OnInit } from '@angular/core';
import { Goal } from '../goal';

@Component({
  selector: 'app-goal',
  templateUrl: './goal.component.html',
  styleUrls: ['./goal.component.css'],
  // styles: ['h4 {color: red} ']
  
})
export class GoalComponent implements OnInit {
  
  // goals: Goal[] = [{ id: 1, name: 'Watch finding Nemo',description:'Find an online version and watch merlin find his son'},
  // { id: 2, name: 'Read a novel', description:'Read smart money woman by Arese' },
  // { id: 3, name: 'Call mom', description:'Call the queen mother'},
  // { id: 4, name: 'Send dad a gift', description:'Package birthday gift' },
  // { id: 5, name: 'Cook dinner', description:'cook lasagna' },
  // { id:6,name:'Just sleep', description:'get sleeping beauty rest'},
  // {id:7,name:'Call Babe', description:'call sugar'}
  // ];

  goals: Goal[] = [new Goal( 1, 'Watch finding Nemo','Find an online version and watch merlin find his son', new Date(2020,3,14)),
  new Goal( 2, 'Read a novel', 'Read smart money woman by Arese', new Date(2022,6,24) ),
  new Goal(  3, 'Call mom', 'Call the queen mother', new Date(2012,5,30)),
  new Goal( 4,  'Send dad a gift', 'Package birthday gift', new Date(2022,8,2)),
  new Goal(  5, 'Cook dinner', 'cook lasagna', new Date(2020,11,11)),
  new Goal( 6,'Just sleep', 'get sleeping beauty rest', new Date(2020,9,14)),
  new Goal(7, 'Call Boss', 'update my boss',new Date(2020,1,10))
  ];

  addNewGoal(goal: Goal){
    let goalLength = this.goals.length;
    goal.id = goalLength+1;
    goal.completeDate = new Date(goal.completeDate)
    this.goals.push(goal)
  }

  toggleDetails(index: any ){
    this.goals[index].showDescription = !this.goals[index].showDescription;
  }
  
  deleteGoal(isComplete: any, index: number){
    if (isComplete) {
      let toDelete = confirm(`Are you sure you want to delete ${this.goals[index].name}?`)

      if (toDelete){
        this.goals.splice(index,1)
      }
    }
    // if (isComplete){
    //   this.goals.splice(index,1);
    // }
  }

  constructor() { }

  ngOnInit(){
  }

}
