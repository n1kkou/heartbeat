Display a popup window when user is AFK or session expired.  
You can also add a callback function to execute when used clicks the confirmation button.

### Installation
`npm install -S session-heartbeat`

**app.component.ts**

```ts
...
import { SessionHeartbeat } from 'session-heartbeat';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  constructor() {
  }
  
  ngOnInit() {
    let heartbeat = new SessionHeartbeat();
    heartbeat.init(1, 60, {
      'title': 'Popup title',
      'message': 'Popup details',
      'button': 'Login'
    });
  }
}
```

**src/styles.scss**
```css
@import "~session-heartbeat/session-heartbeat.css";
```
