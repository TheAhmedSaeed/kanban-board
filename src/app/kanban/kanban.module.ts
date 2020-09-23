import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BoardListComponent } from './board-list/board-list.component';
import { BoardComponent } from './board/board.component';
import { KanbanRoutingModule } from './kanban-routing.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [BoardListComponent, BoardComponent],
  imports: [CommonModule, KanbanRoutingModule, SharedModule],
})
export class KanbanModule {}
