# ligma.js
js library full of random things with no specific topic
<br>
some are better suited for userscripts/extensions, some for websites, etc
<br>
some things are actually useful, and some (most) are just random 
### random things in question:
- `ligmajs.inYourWalls(interval, type);` spams "I'm in your walls" every `interval` ms. 
    - `type` accepts `message`, `warn`, or `error`
- `ligmajs.scam(company, amount, cardtype, msgtype);` sends a message stating that a tech support agent from `company` needs an `amount` `cardtype` gift card. 
    - `company` accepts `google`, `microsoft`, `mcafee`, `norton`, or `apple`. 
    - `amount` can be any integer. 
    - `cardtype` accepts `googleplay`, `amazon`, `visa`, or `bassproshop`
    - `msgtype` can be either `alert` (popup) or `message` (console)
- `ligmajs.lagmachine();` randomized page lag
- `ligmajs.bluescreen(timeout);` replaces the entire page with a Windows 10 BSOD after *timeout* milliseconds
- `ligmajs.secretPassage(id, password, content);` quietly makes the element #*id* editable. if at any time the text content of this element matches `password`, a popup will appear, with its content being `content`. set `content` to a HTML template literal (or don't but its good if you do)
- 'ligmajs.dancingBanana(action, amount);' action can be either create or destroy. create makes `amount` randomly placed dancing banana gifs, and destroy removes them if they exist.