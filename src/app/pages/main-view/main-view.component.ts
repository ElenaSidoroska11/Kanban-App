import { Component, OnInit } from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import {BoardModel} from "../../modals/board.model";
import {ColumnModel} from "../../modals/column.model";

@Component({
  selector: 'app-main-view',
  templateUrl: './main-view.component.html',
  styleUrls: ['./main-view.component.scss']
})
export class MainViewComponent implements OnInit {

  constructor() { }
board:BoardModel= new BoardModel('Test Board' ,[
  new ColumnModel('Ideas', [
    'Learn Angular',
    'Learn HTML',
    'Learn CSS'
  ]),
  new ColumnModel('Research',[
    'About CSS',
    'About Angular',
    'About HTML'
  ]),
  new ColumnModel('Todo',[
    'Go to work',
    'Go Home',
    'Fall asleep'
  ]),
  new ColumnModel('Done',[
    'Get up',
    'Brush teeth',
    'Check e-mail'
  ])
]);
  ngOnInit(): void {
  }

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);
    }
  }
}
