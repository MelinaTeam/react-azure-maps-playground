(self.webpackChunkazure_maps_storybook=self.webpackChunkazure_maps_storybook||[]).push([[47],{"./node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{R:()=>useMDXComponents,x:()=>MDXProvider});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const emptyComponents={},MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext(emptyComponents);function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((function(){return"function"==typeof components?components(contextComponents):{...contextComponents,...components}}),[contextComponents,components])}function MDXProvider(properties){let allComponents;return allComponents=properties.disableParentContext?"function"==typeof properties.components?properties.components(emptyComponents):properties.components||emptyComponents:useMDXComponents(properties.components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},properties.children)}},"./src/stories/DataVisualization/HeatMapLayer/HeatMapLayer.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>MDXContent});__webpack_require__("./node_modules/react/index.js");var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js"),_home_runner_work_react_azure_maps_playground_react_azure_maps_playground_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim_mjs__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs"),_HeatMapLayer__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/stories/DataVisualization/HeatMapLayer/HeatMapLayer.tsx");function _createMdxContent(props){const _components={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",...(0,_home_runner_work_react_azure_maps_playground_react_azure_maps_playground_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim_mjs__WEBPACK_IMPORTED_MODULE_3__.R)(),...props.components};return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.W8,{title:"Data Visualization/Heat Map Layer"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h1,{id:"heat-map-layer",children:"Heat Map Layer"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:["A heat map layer can be used to visualize the density of point data on the map.",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("br",{}),"\nFollowing code shows how to add a simple heat map layer:",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("br",{})]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_HeatMapLayer__WEBPACK_IMPORTED_MODULE_2__.A,{radius:10}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.kL,{code:'\n<AzureMapLayerProvider\n    type="HeatLayer"\n    options={{\n        radius={10},\n        opacity={1},\n        intensity={1},\n    }}\n/>\n'}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"color",children:"color"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:["You can customize the color of the heat map layer by passing the ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"color"})," prop like this: ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("br",{})]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_HeatMapLayer__WEBPACK_IMPORTED_MODULE_2__.A,{radius:10,color:["interpolate",["linear"],["heatmap-density"],0,"rgba(33,102,172,0)",.2,"rgb(103,169,207)",.4,"rgb(209,229,240)",.6,"rgb(253,219,199)",.8,"rgb(239,138,98)",1,"rgb(178,24,43)"]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.kL,{code:"\n<AzureMapLayerProvider\n    type=\"HeatLayer\"\n    options={{\n        radius: 10,\n        color: [\n                'interpolate',\n                ['linear'],\n                ['heatmap-density'],\n                0, 'rgba(33,102,172,0)',\n                0.2, 'rgb(103,169,207)',\n                0.4, 'rgb(209,229,240)',\n                0.6, 'rgb(253,219,199)',\n                0.8, 'rgb(239,138,98)',\n                1, 'rgb(178,24,43)'\n            ],\n    }}\n/>\n"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"weight",children:"weight"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:["Specifies how much an individual data point contributes to the heatmap. ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("br",{}),"\nMust be a number greater than 0. Default ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"1"}),'\nIn our example, we set the weight based on "mag" property of the earthquake data. ',(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("br",{})]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_HeatMapLayer__WEBPACK_IMPORTED_MODULE_2__.A,{radius:10,weight:["interpolate",["exponential",2],["get","mag"],0,0,10,1]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.kL,{code:"\n<AzureMapLayerProvider\n    type=\"HeatLayer\"\n    options={{\n        radius: 10,\n        weight: [\n                'interpolate',\n                ['exponential', 2], //Using an exponential interpolation since earthquake magnitudes are on an exponential scale.\n                ['get', 'mag'],\n                0,\n                0,\n                10,\n                1,\n            ]\n    }}\n/>\n"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:["For more available properties, see the documentation ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a,{href:"https://learn.microsoft.com/en-us/javascript/api/azure-maps-control/atlas.heatmaplayeroptions?view=azure-maps-typescript-latest",rel:"nofollow",children:"HeatMapLayerOptions"})]})]})}function MDXContent(props={}){const{wrapper:MDXLayout}={...(0,_home_runner_work_react_azure_maps_playground_react_azure_maps_playground_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim_mjs__WEBPACK_IMPORTED_MODULE_3__.R)(),...props.components};return MDXLayout?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(MDXLayout,{...props,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_createMdxContent,{...props})}):_createMdxContent(props)}},"./node_modules/@storybook/core/dist/components sync recursive":module=>{function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="./node_modules/@storybook/core/dist/components sync recursive",module.exports=webpackEmptyContext},"./node_modules/@storybook/core/dist/theming sync recursive":module=>{function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="./node_modules/@storybook/core/dist/theming sync recursive",module.exports=webpackEmptyContext},"./src/key.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{E:()=>key,t:()=>mapOptions});var react_azure_maps__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react-azure-maps/dist/react-azure-maps.es5.js");const key="013GHvO6nMXUbB0yrRDmgizOaO3tRzevKMzPA6Yl4PeFMPgqFuelJQQJ99AGACrJL3JAArohAAAgAZMPQDp7",mapOptions={authOptions:{authType:react_azure_maps__WEBPACK_IMPORTED_MODULE_0__.h_.subscriptionKey,subscriptionKey:key},center:[0,0],view:"Auto"}},"./src/stories/DataVisualization/HeatMapLayer/HeatMapLayer.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _key__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/key.ts"),react_azure_maps__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react-azure-maps/dist/react-azure-maps.es5.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/jsx-runtime.js");const magWeight=["interpolate",["exponential",2],["get","mag"],0,0,10,1],HeatMapLayer=_ref=>{let{radius,opacity,intensity,weight,color}=_ref;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react_azure_maps__WEBPACK_IMPORTED_MODULE_1__.oY,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div",{className:"defaultMap sb-unstyled",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react_azure_maps__WEBPACK_IMPORTED_MODULE_1__._9,{options:_key__WEBPACK_IMPORTED_MODULE_0__.t,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react_azure_maps__WEBPACK_IMPORTED_MODULE_1__.yX,{id:"LineLayer DataSourceProvider",dataFromUrl:"https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_month.geojson",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react_azure_maps__WEBPACK_IMPORTED_MODULE_1__.we,{type:"HeatLayer",options:{color,radius,opacity,intensity,weight:weight?magWeight:1}})})})})})},__WEBPACK_DEFAULT_EXPORT__=HeatMapLayer;HeatMapLayer.__docgenInfo={description:"",methods:[],displayName:"HeatMapLayer",props:{radius:{required:!1,tsType:{name:"number"},description:""},opacity:{required:!1,tsType:{name:"number"},description:""},intensity:{required:!1,tsType:{name:"number"},description:""},weight:{required:!1,tsType:{name:"boolean"},description:""},color:{required:!1,tsType:{name:"any"},description:""}}}},"./node_modules/memoizerific sync recursive":module=>{function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="./node_modules/memoizerific sync recursive",module.exports=webpackEmptyContext}}]);