import { Routes } from '@angular/router';
import { ChessBoardComponent } from './components/chess-board/chess-board.component';

export const routes: Routes = [
    {
        path: 'chess-board',
        component: ChessBoardComponent
    },
    {
        path: '*',
        redirectTo: 'chess-board'
    },
];
