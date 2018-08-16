## heartbeat
Display a popup window when user is AFK or session expired  

### Install
npm install -S session-heartbeat

**your.module.ts**

```ts
...
import * as {Heartbeat} from 'session-heartbeat';

let heartbeat = new Heartbeat();
heartbeat.init(1, 600, {
  'title': 'Popup title',
  'message': 'Popup details',
  'button': 'Login',
  'callback': somefunction
});

```

**src/styles.scss**
```css
@import "~session-heartbeat/heartbeat.css";
```
