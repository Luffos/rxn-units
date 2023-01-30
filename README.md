<a href="#" align="center">
  <img src="https://user-images.githubusercontent.com/28831375/215549234-c57cc933-3f61-4a5f-8308-e3b301e23646.png">
</a>
</br></br>
<p align="center">
    <img height="22px" alt="GitHub" src="https://img.shields.io/github/license/Luffos/rxn-units?style=for-the-badge"> ‎ ‎ <img height="22px" alt="GitHub issues" src="https://img.shields.io/github/issues-raw/luffos/rxn-units?style=for-the-badge"> ‎ ‎ <img height="22px" alt="GitHub code size in bytes" src="https://img.shields.io/github/languages/code-size/luffos/rxn-units?style=for-the-badge"> ‎ ‎ <img height="22px" alt="GitHub last commit (branch)" src="https://img.shields.io/github/last-commit/luffos/rxn-units/main?style=for-the-badge"> ‎ ‎ <img height="22px" alt="GitHub package.json version" src="https://img.shields.io/github/package-json/v/luffos/rxn-units?style=for-the-badge"> ‎ ‎ <img height="22px" alt="npm" src="https://img.shields.io/npm/dt/rxn-units?style=for-the-badge">
</p>

---------------------------------------------

## Support:

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
The `vw` measurement is equal to 1/100 of the viewport width. <br/>Example: If the browser width is 900px, `vw(1)` equals 9px.
<br/>

**What is vh? (viewport height)**<br/>
The `vh` measurement is equal to 1/100 of the viewport height. <br/>Example: If the browser height is 500px, `vh(1)` equals 5px.
<br/>

**What is vmin and vmax?**<br/>
- `vmax(n)` means `"Which is the larger between vw(n) and vh(n)?"` = `vw(n) or vh(n)`
- `vmin(n)` means `"Which is the lower between vw(n) and vh(n)?"` = `vw(n) or vh(n)`

**Percentage**<br/>
`percentage(x, y)` = `X%` of `Y`
<br/>

##  Usage

🌊 Using via hook (dynamically changes)

```typescript
import React from 'react';
import useUnits from 'rxn-units';
    
const Foo = () => {
  const {vmin, vmax, vw, vh, percentage} = useUnits();

  . . .
}
```
    
📌 Using static methods (need manual recall every time)

```typescript
import React from 'react';
import {vmin, vmax, vw, vh, percentage} from 'rxn-units';
    
const Foo = () => {
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
