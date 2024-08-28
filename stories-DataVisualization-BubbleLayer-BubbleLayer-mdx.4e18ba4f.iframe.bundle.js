(self.webpackChunkazure_maps_storybook=self.webpackChunkazure_maps_storybook||[]).push([[787,965],{"./node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{R:()=>useMDXComponents,x:()=>MDXProvider});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const emptyComponents={},MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext(emptyComponents);function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((function(){return"function"==typeof components?components(contextComponents):{...contextComponents,...components}}),[contextComponents,components])}function MDXProvider(properties){let allComponents;return allComponents=properties.disableParentContext?"function"==typeof properties.components?properties.components(emptyComponents):properties.components||emptyComponents:useMDXComponents(properties.components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},properties.children)}},"./src/stories/DataVisualization/BubbleLayer/BubbleLayer.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>MDXContent});__webpack_require__("./node_modules/react/index.js");var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js"),_home_runner_work_react_azure_maps_playground_react_azure_maps_playground_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim_mjs__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),_storybook_blocks__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs"),_BubbleLayer_stories__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/stories/DataVisualization/BubbleLayer/BubbleLayer.stories.ts"),_BubbleLayer__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/stories/DataVisualization/BubbleLayer/BubbleLayer.tsx");function _createMdxContent(props){const _components={a:"a",code:"code",h1:"h1",p:"p",...(0,_home_runner_work_react_azure_maps_playground_react_azure_maps_playground_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim_mjs__WEBPACK_IMPORTED_MODULE_4__.R)(),...props.components};return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_5__.W8,{of:_BubbleLayer_stories__WEBPACK_IMPORTED_MODULE_2__}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h1,{id:"bubble-layer",children:"Bubble Layer"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:["Bubble layers render points as circles on the map with a fixed pixel radius.",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("br",{}),"\nYou can customize the appearance of the bubbles by passing the ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"options"})," prop.",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("br",{}),"\nFor more available properties, see the documentation ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a,{href:"https://learn.microsoft.com/en-us/javascript/api/azure-maps-control/atlas.bubblelayeroptions?view=azure-maps-typescript-latest",rel:"nofollow",children:"BubbleLayerOptions"}),"."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_BubbleLayer__WEBPACK_IMPORTED_MODULE_3__.A,{}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_5__.kL,{code:"\n<AzureMapLayerProvider\n  type=\"BubbleLayer\"\n  options={{\n    radius: 10,\n    color: 'DodgerBlue',\n    opacity: 1,\n    strokeColor: 'DarkBlue',\n    strokeWidth: 2,\n    strokeOpacity: 1,\n    blur: 0,\n  }}\n/>\n"})]})}function MDXContent(props={}){const{wrapper:MDXLayout}={...(0,_home_runner_work_react_azure_maps_playground_react_azure_maps_playground_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim_mjs__WEBPACK_IMPORTED_MODULE_4__.R)(),...props.components};return MDXLayout?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(MDXLayout,{...props,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_createMdxContent,{...props})}):_createMdxContent(props)}},"./node_modules/@storybook/core/dist/components sync recursive":module=>{function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="./node_modules/@storybook/core/dist/components sync recursive",module.exports=webpackEmptyContext},"./node_modules/@storybook/core/dist/theming sync recursive":module=>{function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="./node_modules/@storybook/core/dist/theming sync recursive",module.exports=webpackEmptyContext},"./src/stories/DataVisualization/BubbleLayer/BubbleLayer.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Example:()=>Example,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__={title:"Data Visualization/Bubble Layer",component:__webpack_require__("./src/stories/DataVisualization/BubbleLayer/BubbleLayer.tsx").A,parameters:{storySource:{source:"import { AzureMap, AzureMapsProvider, AzureMapDataSourceProvider, AzureMapLayerProvider } from 'react-azure-maps';\nimport atlas, { BubbleLayerOptions } from 'azure-maps-control';\n\n// Generate random points to build the data source for the BubbleLayer.\nconst collection = generateRandomPoints(); \n\nconst BubbleLayer = () => {\n  <AzureMapsProvider>\n    <AzureMap options={your_options}>\n      <AzureMapDataSourceProvider id=\"BubbleLayer DataSourceProvider\" collection={collection}>\n        <AzureMapLayerProvider\n          type=\"BubbleLayer\"\n          options={{\n            radius: 10,\n            color: 'DodgerBlue',\n            opacity: 1,\n            strokeColor: 'DarkBlue',\n            strokeWidth: 2,\n            strokeOpacity: 1,\n            blur: 0,\n          }}\n        />\n      </AzureMapDataSourceProvider>\n    </AzureMap>\n  </AzureMapsProvider>\n  );\n};\n\nfunction generateRandomPoints() {\n  var layerData = [];\n\n  for (var i = 0; i < 50; i++) {\n    layerData.push(\n      new atlas.data.Feature(new atlas.data.Point([Math.random() * 360 - 180, Math.random() * 170 - 85]), {\n        title: 'Pin_' + i,\n      }),\n    );\n  }\n\n  return layerData;\n}\n\n"}},args:{radius:10,color:"DodgerBlue",opacity:1,strokeColor:"DarkBlue",strokeWidth:2,strokeOpacity:1,blur:0},argTypes:{opacity:{control:{type:"range",min:0,max:1,step:.1}},strokeWidth:{control:{type:"range",min:0,max:10,step:1}},strokeOpacity:{control:{type:"range",min:0,max:1,step:.1}},blur:{control:{type:"range",min:0,max:1,step:.1}}}},Example={},__namedExportsOrder=["Example"];Example.parameters={...Example.parameters,docs:{...Example.parameters?.docs,source:{originalSource:"{}",...Example.parameters?.docs?.source}}}},"./src/key.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{t:()=>mapOptions});const mapOptions={authOptions:{authType:__webpack_require__("./node_modules/react-azure-maps/dist/react-azure-maps.es5.js").h_.anonymous,clientId:"2a60774c-f588-423b-b004-56d213773ee6",getToken:(resolve,reject)=>{fetch("https://anonymous-auth.azurewebsites.net/api/GetAccessToken-Prod").then((result=>result.text())).then((result=>resolve(result))).catch((error=>reject(new Error("Failed to fetch anon auth token: ".concat(error.message)))))}},center:[0,0],view:"Auto"}},"./src/stories/DataVisualization/BubbleLayer/BubbleLayer.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _key__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/key.ts"),react_azure_maps__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react-azure-maps/dist/react-azure-maps.es5.js"),azure_maps_control__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/azure-maps-control/dist/atlas-esm.min.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/react/jsx-runtime.js");const collection=function generateRandomPoints(){for(var layerData=[],i=0;i<50;i++)layerData.push(new azure_maps_control__WEBPACK_IMPORTED_MODULE_2__.Ay.data.Feature(new azure_maps_control__WEBPACK_IMPORTED_MODULE_2__.Ay.data.Point([360*Math.random()-180,170*Math.random()-85]),{title:"Pin_"+i}));return layerData}(),BubbleLayer=_ref=>{let{radius,color,opacity,strokeColor,strokeWidth,strokeOpacity,blur}=_ref;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(react_azure_maps__WEBPACK_IMPORTED_MODULE_1__.oY,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div",{className:"defaultMap sb-unstyled",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(react_azure_maps__WEBPACK_IMPORTED_MODULE_1__._9,{options:_key__WEBPACK_IMPORTED_MODULE_0__.t,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(react_azure_maps__WEBPACK_IMPORTED_MODULE_1__.yX,{id:"BubbleLayer DataSourceProvider",collection,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(react_azure_maps__WEBPACK_IMPORTED_MODULE_1__.we,{type:"BubbleLayer",options:{radius,color,opacity,strokeColor,strokeWidth,strokeOpacity,blur}})})})})})};const __WEBPACK_DEFAULT_EXPORT__=BubbleLayer;BubbleLayer.__docgenInfo={description:"",methods:[],displayName:"BubbleLayer"}},"./node_modules/memoizerific sync recursive":module=>{function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="./node_modules/memoizerific sync recursive",module.exports=webpackEmptyContext}}]);