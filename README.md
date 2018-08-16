Display a popup window when user is AFK or session expired. 
You can also add a callback function to execute when used clicks the confirmation button.

### Installation
`npm install -S session-heartbeat`

**app.module.ts**
```ts
...
import * as {SessionHeartbeat} from 'session-heartbeat';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    ...
    SessionHeartbeat
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
```

**app.component.ts**

```ts
...
import * as {SessionHeartbeat} from 'session-heartbeat';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  constructor(public sessionHeartbeat: SessionHeartbeat) {
  }
  
  ngOnInit() {
    let heartbeat = new Heartbeat();
    heartbeat.init(1, 600, {
      'title': 'Popup title',
      'message': 'Popup details',
      'button': 'Login',
      'callback': somefunction
    });
  }
}
```

**src/styles.scss**
```css
@import "~session-heartbeat/heartbeat.css";
```
