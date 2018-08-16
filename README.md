## heartbeat
Display a popup window when user is AFK or session expired  

### Install
npm install -S session-heartbeat

**app.module.ts**

```ts
...
import * as {Heartbeat} from 'session-heartbeat';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    Heartbeat
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}```
