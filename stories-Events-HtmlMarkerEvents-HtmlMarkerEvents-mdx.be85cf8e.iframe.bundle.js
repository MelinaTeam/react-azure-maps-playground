(self.webpackChunkazure_maps_storybook=self.webpackChunkazure_maps_storybook||[]).push([[4],{"./node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{R:()=>useMDXComponents,x:()=>MDXProvider});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const emptyComponents={},MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext(emptyComponents);function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((function(){return"function"==typeof components?components(contextComponents):{...contextComponents,...components}}),[contextComponents,components])}function MDXProvider(properties){let allComponents;return allComponents=properties.disableParentContext?"function"==typeof properties.components?properties.components(emptyComponents):properties.components||emptyComponents:useMDXComponents(properties.components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},properties.children)}},"./node_modules/@storybook/addon-docs/dist/blocks.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{W8:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.W8,kL:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.kL});var storybook_internal_client_logger__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("storybook/internal/client-logger"),_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs");(0,storybook_internal_client_logger__WEBPACK_IMPORTED_MODULE_0__.deprecate)("Import from '@storybook/addon-docs/blocks' is deprecated. Please import from '@storybook/blocks' instead.")},"./src/stories/Events/HtmlMarkerEvents/HtmlMarkerEvents.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>MDXContent});__webpack_require__("./node_modules/react/index.js");var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),lib=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),blocks=__webpack_require__("./node_modules/@storybook/addon-docs/dist/blocks.mjs"),key=__webpack_require__("./src/key.ts"),react_azure_maps_es5=__webpack_require__("./node_modules/react-azure-maps/dist/react-azure-maps.es5.js");const collection=function generateRandomPoints(){for(var layerData=[],i=0;i<30;i++)layerData.push([360*Math.random()-180,170*Math.random()-85]);return layerData}(),circleMarker=(0,jsx_runtime.jsx)("div",{className:"circle-marker",style:{width:"25px",height:"25px",borderRadius:"50%",backgroundColor:"crimson"}}),LayerEvents=()=>{const startBlink=e=>{e.target.element.firstElementChild.className="circle-marker blink"},stopBlink=e=>{e.target.element.firstElementChild.className="circle-marker"};return(0,jsx_runtime.jsx)("div",{className:"defaultMap sb-unstyled",children:(0,jsx_runtime.jsx)(react_azure_maps_es5.oY,{children:(0,jsx_runtime.jsx)(react_azure_maps_es5._9,{options:key.t,children:collection.map(((point,index)=>(0,jsx_runtime.jsx)(react_azure_maps_es5.VY,{options:{position:point,draggable:!0},markerContent:circleMarker,events:[{eventName:"dragstart",callback:startBlink},{eventName:"dragend",callback:stopBlink}]},index)))})})})};const HtmlMarkerEvents_HtmlMarkerEvents=LayerEvents;function _createMdxContent(props){const _components={a:"a",h1:"h1",p:"p",strong:"strong",...(0,lib.R)(),...props.components};return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(blocks.W8,{title:"Events/HTML Marker Events"}),"\n",(0,jsx_runtime.jsx)(_components.h1,{id:"html-marker-events",children:"HTML Marker Events"}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:["The HTML Marker component triggers events whenever the user interacts with it.",(0,jsx_runtime.jsx)("br",{}),"\nFor a complete list of available events, refer to the ",(0,jsx_runtime.jsx)(_components.a,{href:"https://samples.azuremaps.com/html-markers/html-marker-layer-events",rel:"nofollow",children:"HTML Marker Events Sample"}),"."]}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:["Below is an example of how to listen for drag events on an HTML marker.",(0,jsx_runtime.jsx)("br",{}),"\nIn this example, CSS animations are used to make the marker blink while it is being dragged.\n",(0,jsx_runtime.jsx)(_components.strong,{children:"Try dragging the markers"})," to see the effect."]}),"\n",(0,jsx_runtime.jsx)(HtmlMarkerEvents_HtmlMarkerEvents,{}),"\n",(0,jsx_runtime.jsx)(blocks.kL,{code:"\nimport { AzureMap, AzureMapsProvider, AzureMapHtmlMarker } from 'react-azure-maps';\nimport './HtmlMarkerEvents.css';\n\n// Generate random points\nconst collection = generateRandomPoints();\n\n// Content for the HTML marker\nconst circleMarker = (\n  <div\n    className=\"circle-marker\"\n    style={{\n      width: '25px',\n      height: '25px',\n      borderRadius: '50%',\n      backgroundColor: 'crimson',\n    }}\n  ></div>\n);\n\nconst LayerEvents = () => {\n  // Add class name to the marker to apply CSS animation\n  const startBlink = (e: any) => {\n    // Access the marker through the event object\n    e.target.element.firstElementChild.className = 'circle-marker blink';\n  };\n  const stopBlink = (e: any) => {\n    e.target.element.firstElementChild.className = 'circle-marker';\n  };\n\n  return (\n    <AzureMapsProvider>\n        <AzureMap options={your_options}>\n          {collection.map((point: number[], index) => (\n            <AzureMapHtmlMarker\n              key={index}\n              options={{ position: point, draggable: true }}\n              markerContent={circleMarker}\n              events={[\n                {\n                  eventName: 'dragstart',\n                  callback: startBlink,\n                },\n                {\n                  eventName: 'dragend',\n                  callback: stopBlink,\n                },\n              ]}\n            />\n          ))}\n        </AzureMap>\n    </AzureMapsProvider>\n  );\n};\n\nfunction generateRandomPoints() {\n  var layerData = [];\n\n  for (var i = 0; i < 30; i++) {\n    layerData.push([Math.random() * 360 - 180, Math.random() * 170 - 85]);\n  }\n\n  return layerData;\n}\n"}),"\n",(0,jsx_runtime.jsx)(blocks.kL,{code:"\n/* HtmlMarkerEvents.css */\n\n.circle-marker.blink {\n  animation: blink-animation 0.5s infinite alternate;\n}\n\n@keyframes blink-animation {\n  0% {\n    opacity: 0.5;\n    background-color: rgb(235, 167, 167);\n    box-shadow: 0 0 0 0 rgba(162, 4, 44, 0);\n  }\n  20% {\n    opacity: 0.7;\n    background-color: rgb(235, 167, 167);\n    box-shadow: 0 0 0 20px rgba(162, 4, 44, 0);\n  }\n  100% {\n    opacity: 1;\n    background-color: crimson;\n    box-shadow: 0 0 0 0 rgba(162, 4, 44, 0.6);\n  }\n}\n"})]})}function MDXContent(props={}){const{wrapper:MDXLayout}={...(0,lib.R)(),...props.components};return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,{...props,children:(0,jsx_runtime.jsx)(_createMdxContent,{...props})}):_createMdxContent(props)}LayerEvents.__docgenInfo={description:"",methods:[],displayName:"LayerEvents"}},"./node_modules/@storybook/core/dist/components sync recursive":module=>{function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="./node_modules/@storybook/core/dist/components sync recursive",module.exports=webpackEmptyContext},"./node_modules/@storybook/core/dist/theming sync recursive":module=>{function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="./node_modules/@storybook/core/dist/theming sync recursive",module.exports=webpackEmptyContext},"./src/key.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{t:()=>mapOptions});const mapOptions={authOptions:{authType:__webpack_require__("./node_modules/react-azure-maps/dist/react-azure-maps.es5.js").h_.anonymous,clientId:"2a60774c-f588-423b-b004-56d213773ee6",getToken:(resolve,reject)=>{fetch("https://anonymous-auth.azurewebsites.net/api/GetAccessToken-Prod").then((result=>result.text())).then((result=>resolve(result))).catch((error=>reject(new Error("Failed to fetch anon auth token: ".concat(error.message)))))}},center:[0,0],view:"Auto"}},"./node_modules/memoizerific sync recursive":module=>{function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="./node_modules/memoizerific sync recursive",module.exports=webpackEmptyContext}}]);