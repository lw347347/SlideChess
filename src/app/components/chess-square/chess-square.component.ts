import { CommonModule } from '@angular/common';
import { Component, Inject, Injectable, Input } from '@angular/core';
import { PossibleColor } from '../../enums';

@Injectable()
@Component({
  selector: 'app-chess-square',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './chess-square.component.html',
  styleUrl: './chess-square.component.scss'
})
export class ChessSquareComponent {
  @Input() selected: boolean = false;
  @Input() public defaultColor: PossibleColor = PossibleColor.green;
  possibleColor = PossibleColor; // Trust me, we need this for the template

  constructor() {
  }
}
