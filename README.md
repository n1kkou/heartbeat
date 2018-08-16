Display a popup window when user is AFK or session expired. 
You can also add a callback function to execute when used clicks the confirmation button.

### Install
`npm install -S session-heartbeat`

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
