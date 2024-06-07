import { CommonModule } from '@angular/common';
import { ChessSquareComponent } from './../chess-square/chess-square.component';
import { Component, Injectable } from '@angular/core';
import { PossibleColor } from '../../enums';

@Injectable()
@Component({
  selector: 'app-chess-board',
  standalone: true,
  imports: [ChessSquareComponent, CommonModule],
  templateUrl: './chess-board.component.html',
  styleUrl: './chess-board.component.scss'
})
export class ChessBoardComponent {
  public squares: Square[] = [];
  ngOnInit() {
    this.initializeSquares();
  }
  constructor() {}

  public initializeSquares() {
    this.squares = [];
    for (let iCount = 0; iCount < 64; iCount++) {
      this.squares.push(new Square(iCount, this.convertNumberToNotation(iCount), 
        (iCount % 2 === 0 && Math.floor(iCount / 8) % 2 === 0) || (iCount % 2 === 1 && Math.floor(iCount / 8) % 2 === 1) ? PossibleColor.white : PossibleColor.green));
    }
  }

  public convertNumberToNotation(number: number): string {
    const column = number % 8;
    const row = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'][Math.floor(number / 8)];
    return row + column;
  }
}

class Square {
  number: number;
  notation: string;
  defaultColor: PossibleColor;

  constructor(number: number, notation: string, defaultColor: PossibleColor) {
    this.number = number;
    this.notation = notation;
    this.defaultColor = defaultColor;
  }
}