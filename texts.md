## What i learnt

-figma
-safari

# safari

### playwright

```
npm i -D @playwright/test

npx playwright install
```

"scripts": {
"dev": "vite",
"build": "vite build",
"preview": "vite preview",
"test:chrome": "npx playwright test --headed --browser=chromium",
"test:firefox": "npx playwright test --headed --browser=firefox",
"test:safari": "npx playwright test --headed --browser=webkit"
},

## vh and vw

dont use for body and html (vw)

instead use 100svh for mobile
vw doesnt change with zoom. so bad for text.
clamp(rem , 5vw + 1rem,rem )
min(rem,vw)

[steps](https://joyofcode.xyz/test-your-site-in-every-browser)

## Markdown

![alt text](image URL)

For todo lists

- [ ] Go to the market
- [x] Buy groceries
- [ ] Pay for parking
