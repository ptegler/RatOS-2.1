"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[360],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return d}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),u=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),h=u(r),d=o,f=h["".concat(l,".").concat(d)]||h[d]||p[d]||i;return r?n.createElement(f,a(a({ref:t},c),{},{components:r})):n.createElement(f,a({ref:t},c))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var u=2;u<i;u++)a[u]=r[u];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}h.displayName="MDXCreateElement"},9222:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return u},toc:function(){return c},default:function(){return h}});var n=r(7462),o=r(3366),i=(r(7294),r(3905)),a=["components"],s={},l="Troubleshooting",u={unversionedId:"troubleshooting",id:"troubleshooting",isDocsHomePage:!1,title:"Troubleshooting",description:"My steppers are running backwards!",source:"@site/docs/troubleshooting.md",sourceDirName:".",slug:"/troubleshooting",permalink:"/docs/troubleshooting",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/troubleshooting.md",tags:[],version:"current",frontMatter:{},sidebar:"docsSidebar",previous:{title:"Slicer Configuration",permalink:"/docs/slicers"},next:{title:"Manual Firmware Compilation",permalink:"/docs/manual-firmware-compilation"}},c=[{value:"My steppers are running backwards!",id:"my-steppers-are-running-backwards",children:[],level:2},{value:"Everytime i update my changes are gone.",id:"everytime-i-update-my-changes-are-gone",children:[],level:2},{value:"Klipper says the MCU is unable to connect",id:"klipper-says-the-mcu-is-unable-to-connect",children:[],level:2},{value:"I updated klipper and now i get an error!",id:"i-updated-klipper-and-now-i-get-an-error",children:[],level:2},{value:"Get help",id:"get-help",children:[],level:2}],p={toc:c};function h(e){var t=e.components,s=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,n.Z)({},p,s,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"troubleshooting"},"Troubleshooting"),(0,i.kt)("h2",{id:"my-steppers-are-running-backwards"},"My steppers are running backwards!"),(0,i.kt)("p",null,"Refer to the stepper section at the top of printer.cfg, you can add or remove ",(0,i.kt)("inlineCode",{parentName:"p"},"!")," in front of the dir_pin to reverse the direction of that particular stepper."),(0,i.kt)("h2",{id:"everytime-i-update-my-changes-are-gone"},"Everytime i update my changes are gone."),(0,i.kt)("p",null,"You're not supposed to change ",(0,i.kt)("em",{parentName:"p"},"any")," files inside the config/ folder. You should ",(0,i.kt)("em",{parentName:"p"},"only")," change your printer.cfg, if you need to change settings refer to the ",(0,i.kt)("a",{parentName:"p",href:"/docs/configuration#overrides"},"Configuration: overrides")," section."),(0,i.kt)("h2",{id:"klipper-says-the-mcu-is-unable-to-connect"},"Klipper says the MCU is unable to connect"),(0,i.kt)("p",null,"Double check your USB connection, try another cable (the one that comes with the board usually works), and check that your firmware was flashed correctly (refer to the guide for your board)."),(0,i.kt)("h2",{id:"i-updated-klipper-and-now-i-get-an-error"},"I updated klipper and now i get an error!"),(0,i.kt)("p",null,"When you update klipper you might see an error that looks like this:"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Firmware version mismatch between host and guest",src:r(5254).Z})),(0,i.kt)("p",null,"This is because klipper made changes to a part of the MCU firmware that we use. Klipper is telling us that the version of klipper running on the Pi is newer than the version running on the MCU. To fix this, we have to flash the board with a new version of the firmware. For convenience, and ease of use, the newest firmware is compiled and put in the ",(0,i.kt)("inlineCode",{parentName:"p"},"firmware_binaries")," folder which you can find in the ",(0,i.kt)("inlineCode",{parentName:"p"},"MACHINE")," tab in Mainsail. You can use this to flash your MCU the same way you did initially, via SD Card. RatOS attempts to flash supported boards automatically when klipper is updated. If you're getting this error you're probably using a board which does not support automatic flashing via USB. If you're not, please reach out on ",(0,i.kt)("a",{parentName:"p",href:"https://discord.gg/ratrig"},"discord"),"."),(0,i.kt)("h2",{id:"get-help"},"Get help"),(0,i.kt)("p",null,"For further support check out the RatOS-support and klipper channels on Discord. Use the invite link below to join."),(0,i.kt)("a",{href:"https://discord.gg/ratrig",class:"button"},"Join the Unnofficial RatRig Discord Community"),"This is because klipper made changes to a part of the MCU firmware that we use. Klipper is telling us that the version of klipper running on the Pi is newer than the version running on the MCU. To fix this, we have to flash the board with a new version of the firmware.")}h.isMDXComponent=!0},5254:function(e,t,r){t.Z=r.p+"assets/images/firmware_version_mismatch-456c9561ecf03b8fc5c498f42ce6a891.png"}}]);