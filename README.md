# Bind Visualization
[中文](./README-zh.md)
![screenshot](./asset/screenshot.jpg)
A CS:GO bind visualization webpage.
## How to Use
1. Download from release page, unzip, and open `index.html`.
2. Launch CS:GO, open console and type `clear; key_listboundkeys`, copy all the output, paste them in the input area in the webpage and click button below. All bound keys are light-green-backgrounded. Hover one of those bound keys would display what exactly is bound to the key. Be aware that it can't tell whether it's an alias or an actual key bind. 

Every valid key has an attribute called `data-selector` which means you can use its value in console. For example, `shift` on the right side is labeled `rshift`, so you can bind this key whatever you want like `bind rshift +attack`. Non-valid keys like Win key on the left and PrtSc key are blank.

## Contribute
All styles are written in less and get compiled to css, so if you want to change its style, you need have Node.js installed in your computer, run `npm i` in the repo folder, change less code and run `npm run build` to update css content.
