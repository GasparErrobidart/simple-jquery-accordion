# Simple jQuery accordion
A simple, jQuery accordion.

1. Download and link the script
```html
<script type="text/javascript" src="/assets/js/accordion.js"></script>

```

2. Initialize an instance passing the buttons selector
```javascript
const accordion = new Accordion({buttons : ".accordion-btn"})
```

3. Implement using `target` attributes to pass a selector
```html
<button class="accordion-btn" target="#option-1" type="button" name="button">Option 1</button>
<div id="option-1">...</div>
<button class="accordion-btn" target="#option-2" type="button" name="button">Option 2</button>
<div id="option-2">...</div>
<button class="accordion-btn" target="#option-3" type="button" name="button">Option 3</button>
<div id="option-3">...</div>
```
