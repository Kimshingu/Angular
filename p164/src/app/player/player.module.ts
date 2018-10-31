import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlayerRoutingModule } from './player-routing.module';
import { PlayerComponent } from './player.component';

import { ShareModule } from '../share/share.module';

@NgModule({
  imports: [
    CommonModule,
    PlayerRoutingModule,
    ShareModule
  ],
  declarations: [PlayerComponent]
})
export class PlayerModule {
  constructor() {
    console.log('PlayerModule # constructor() called.');
    console.log(new Date().toLocaleString());
  }
}

// 이 모듈은 루트 모듈이 아니므로 명시적으로 CommonModule을 임포트 해야한다.
// BrowserModule 임포트가 되어있지 않으므로 위처럼 처리해야 한다.
