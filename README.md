## heartbeat
Display a popup window when user is AFK or session expired  

### Usage  
```js
var session = new heartbeat();
session.init(1, 600, {
  'title': 'Session expired',
  'message': 'Please login to continue',
  'button': 'Login',
  'callback': somefunction
});
```
