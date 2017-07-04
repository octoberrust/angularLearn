import {Injectable} from '@angular/core';

@Injectable()
export class TaskListService{
    constructor(){
        this.tasks=[
             {title:'Zadanie 1', done:false},
        {title:'Zadanie 2', done:true},
        {title:'Zadanie 3', done:false},
        {title:'Zadanie 4', done:true}
        ];
    }

}