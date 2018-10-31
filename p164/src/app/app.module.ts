import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { CoreModule } from './core/core.module';
import { MemberModule } from './member/member.module';
import { PlayerModule } from './player/player.module';
import { ShareModule } from './share/share.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { IntroComponent } from './component/intro/intro.component';
// import { HelloComponent } from './component/hello/hello.component';
// import { CoreTestComponent } from './component/core-test/core-test.component';
import { IntroComponent, HelloComponent, CoreTestComponent } from './component/index';


@NgModule({
  declarations: [
    AppComponent,
    IntroComponent,
    HelloComponent,
    CoreTestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, HttpModule,
    CoreModule.forRoot({ nickName: 'Happy' }),
    MemberModule,
    PlayerModule,
    ShareModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor() {
    console.log('AppModule # constructor() called.');
  }
}
// PlayerModule을 eager 로딩과 동시에 Lazy 로딩방식으로 사용할 수 없다.
