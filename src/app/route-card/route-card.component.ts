import {ChangeDetectorRef, Component} from '@angular/core';
import {RouteService} from "../route.service";
import {PlayerAction} from "../player-action.interface";
import {ActionType} from "../action-type.interface";
import locations from '../../assets/locations.json'
import items from '../../assets/items.json'
import enemies from '../../assets/enemies.json'

@Component({
  selector: 'dsr-route-card',
  templateUrl: './route-card.component.html',
  styleUrls: ['./route-card.component.css']
})
export class RouteCardComponent {

  actionTypeEnumReference = ActionType;
  playerActions: PlayerAction[] = this.routeService.getRoute();
  locations: any = locations;
  items: any = items;
  enemies: any = enemies;

  constructor(private routeService: RouteService, private ref: ChangeDetectorRef) {}

  ngOnInit() {
    this.playerActions = this.routeService.getRoute();
  }

  onStateChange(): void {
    this.playerActions = this.routeService.getRoute();
  }

  lookupName(action: PlayerAction): any {
    switch (action.type) {
      case ActionType.GOTO:
        // @ts-ignore: suppress implicit any errors
        return this.locations[action.target];
      case ActionType.PICKUP:
        // @ts-ignore: suppress implicit any errors
        return this.items[action.target];
      case ActionType.KILL:
        // @ts-ignore: suppress implicit any errors
        return this.enemies[action.target];
      default:
        return "error";
    }
  }

  insertIndicator(action: PlayerAction): string {
    switch (action.type) {
      case ActionType.GOTO:
        return "🏃‍♀️";
      case ActionType.PICKUP:
        return "🖐️";
      case ActionType.KILL:
        return "⚔️";
      default:
        return "error";
    }
  }
}
