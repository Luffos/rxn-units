
<a href="https://www.npmjs.com/package/rxn-units"><img src="https://i.imgur.com/sbpQixo.png" /></a><br/>
Viewport units (vw, vh, vmin, vmax) + useUnits hook<br/>for React, React Native and Expo.

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

##  Example

- Using dynamical hooks: [CodeSandbox Example here](https://codesandbox.io/s/rxn-units-example-ox6n4h)

##  Usage

Using via hook (dynamically changes)

    import React from 'react';
    import useUnits from 'rxn-units';
    
    const Test = () => {
	  const {vmin, vmax, vw, vh} = useUnits();

      . . .
    }
    
Using static methods (Need manual recall every time)

    import React from 'react';
    import {vmin, vmax, vw, vh} from 'rxn-units';
    
    const handleClick = () => {
        console.log("current vmin", vmin());
        console.log("current vmax", vmax());
    }
    
    . . .

##  License
MIT - This module was built with ❤️ by [Luffos](https://github.com/Luffos)<br/>Feel free for modify, edit, copy, fork and share
