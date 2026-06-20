import { DecimalPipe } from '@angular/common';
import { Component, input } from '@angular/core';

@Component({
  selector: 'app-dungeon-overview',
  imports: [DecimalPipe],
  templateUrl: './dungeon-overview.html',
  styleUrl: './dungeon-overview.css',
})
export class DungeonOverview {
  floor = input<number>();
  timeToFloorCollapse = input<string>();
  crawlers = input<number>();
}
