
<a href="https://www.npmjs.com/package/rxn-units"><img width="263" src="https://i.imgur.com/0vxacb0.png" /></a><br/>
Viewport units (vw, vh, vmin, vmax, percentage) + useUnits hook<br/>for React, React Native and Expo.

Support:

| Android | IOS | Web <br/>(react-native-web)  |  Expo  |
|:-------:|:---:|:----------------------------:|:------:|
|    ✅  |  ✅ |            ✅                |   ✅  |


Inspired by: [react-native-viewport-units](https://github.com/jmstout/react-native-viewport-units) and [react-native-expo-viewport-units](https://github.com/joetakara/react-native-expo-viewport-units)

##  Install

Using NPM
```sh
npm install rxn-units
```

Using Yarn
```sh
yarn add rxn-units
```
<br/> 🌐 Using this module for Web?<br/>Don't forget to setup [react-native-web](https://github.com/necolas/react-native-web)

##  Examples

- Using dynamical hooks: [CodeSandbox Example ☁️](https://codesandbox.io/s/rxn-units-example-ox6n4h)

## Units (vw, vh, vmin, vmax and percentage)
**What is vw? (viewport width)**<br/>
The `vw` measurement is equal to 1/100 of the viewport, window or screen width.
Example: If the browser width is 900px, `vw(1)` equals 9px.
<br/>

**What is vh? (viewport height)**<br/>
The `vh` measurement is equal to 1/100 of the viewport, window or screen height.
Example: If the browser height is 500px, `vh(1)` equals 5px.
<br/>

**What is vmin and vmax?**<br/>
- `vmax(n)` means `"Which is the larger between vw(n) and vh(n)?"` = `vw(n) or vh(n)`
- `vmin(n)` means `"Which is the lower between vw(n) and vh(n)?"` = `vw(n) or vh(n)`

**Percentage**<br/>
`percentage(x, y)` = `X%` of `Y`
<br/>

##  Usage

Using via hook (dynamically changes)

```typescript
import React from 'react';
import useUnits from 'rxn-units';
    
const Test = () => {
  const {vmin, vmax, vw, vh, percentage} = useUnits();

  . . .
}
```
    
Using static methods (Need manual recall every time)

```typescript
import React from 'react';
import {vmin, vmax, vw, vh, percentage} from 'rxn-units';
    
const handleClick = () => {
  console.log("current vmin", vmin());
  console.log("current vmax", vmax());
}
```

## Contributors

<a href = "https://github.com/Luffos/rxn-units/graphs/contributors">
  <img src = "https://contrib.rocks/image?repo=Luffos/rxn-units"/>
</a>

##  📄 License
MIT - This module was built with ❤️ by [Luffos](https://github.com/Luffos)<br/>Feel free for modify, edit, copy, fork and share
