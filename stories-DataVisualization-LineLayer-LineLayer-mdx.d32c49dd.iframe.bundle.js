(self.webpackChunkazure_maps_storybook=self.webpackChunkazure_maps_storybook||[]).push([[267],{"./node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{R:()=>useMDXComponents,x:()=>MDXProvider});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const emptyComponents={},MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext(emptyComponents);function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((function(){return"function"==typeof components?components(contextComponents):{...contextComponents,...components}}),[contextComponents,components])}function MDXProvider(properties){let allComponents;return allComponents=properties.disableParentContext?"function"==typeof properties.components?properties.components(emptyComponents):properties.components||emptyComponents:useMDXComponents(properties.components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},properties.children)}},"./src/stories/DataVisualization/LineLayer/LineLayer.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>MDXContent});__webpack_require__("./node_modules/react/index.js");var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js"),_home_runner_work_react_azure_maps_playground_react_azure_maps_playground_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim_mjs__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs"),_LineLayer__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/stories/DataVisualization/LineLayer/LineLayer.tsx");function _createMdxContent(props){const _components={a:"a",h1:"h1",p:"p",...(0,_home_runner_work_react_azure_maps_playground_react_azure_maps_playground_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim_mjs__WEBPACK_IMPORTED_MODULE_3__.R)(),...props.components};return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.W8,{title:"Data Visualization/Line Layer"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h1,{id:"line-layer",children:"Line Layer"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:["A line layer can be used to render LineString and MultiLineString features as paths or routes on the map.",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("br",{}),"\nIt can also be used to render the outline of Polygon and MultiPolygon features.",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("br",{}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("br",{}),"\nThe following code shows how to add a simple line layer. A thorough tutorial can be found ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a,{href:"https://learn.microsoft.com/en-us/azure/azure-maps/map-add-line-layer",rel:"nofollow",children:"here"}),".",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("br",{}),"\nFor more available properties, see the documentation ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a,{href:"https://learn.microsoft.com/en-us/javascript/api/azure-maps-control/atlas.linelayeroptions?view=azure-maps-typescript-latest",rel:"nofollow",children:"LineLayerOptions"}),"."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_LineLayer__WEBPACK_IMPORTED_MODULE_2__.A,{}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.kL,{code:"\n<AzureMapLayerProvider\n    type=\"LineLayer\"\n    options={{\n        strokeColor: 'DodgerBlue',\n        strokeWidth: 4,\n        strokeOpacity: 1,\n        blur: 0,\n        lineCap: 'round',\n        translate: [0, 0],\n    }}\n/>\n"})]})}function MDXContent(props={}){const{wrapper:MDXLayout}={...(0,_home_runner_work_react_azure_maps_playground_react_azure_maps_playground_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim_mjs__WEBPACK_IMPORTED_MODULE_3__.R)(),...props.components};return MDXLayout?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(MDXLayout,{...props,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_createMdxContent,{...props})}):_createMdxContent(props)}},"./node_modules/@storybook/core/dist/components sync recursive":module=>{function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="./node_modules/@storybook/core/dist/components sync recursive",module.exports=webpackEmptyContext},"./node_modules/@storybook/core/dist/theming sync recursive":module=>{function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="./node_modules/@storybook/core/dist/theming sync recursive",module.exports=webpackEmptyContext},"./src/key.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{t:()=>mapOptions});const mapOptions={authOptions:{authType:__webpack_require__("./node_modules/react-azure-maps/dist/react-azure-maps.es5.js").h_.anonymous,clientId:"2a60774c-f588-423b-b004-56d213773ee6",getToken:(resolve,reject)=>{fetch("https://anonymous-auth.azurewebsites.net/api/GetAccessToken-Prod").then((result=>result.text())).then((result=>resolve(result))).catch((error=>reject(new Error("Failed to fetch anon auth token: ".concat(error.message)))))}},center:[0,0],view:"Auto"}},"./src/stories/DataVisualization/LineLayer/LineLayer.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _key__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/key.ts"),react_azure_maps__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react-azure-maps/dist/react-azure-maps.es5.js"),azure_maps_control__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/azure-maps-control/dist/atlas-esm.min.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/react/jsx-runtime.js");const collection=new azure_maps_control__WEBPACK_IMPORTED_MODULE_2__.Ay.data.LineString([[-74.0039,40.88029],[-87.583,41.93497],[-105.20507,39.77476],[-122.43164,47.66538]]),LineLayer=_ref=>{let{strokeColor,strokeWidth,strokeOpacity,blur,lineCap,translate}=_ref;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(react_azure_maps__WEBPACK_IMPORTED_MODULE_1__.oY,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div",{className:"defaultMap sb-unstyled",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(react_azure_maps__WEBPACK_IMPORTED_MODULE_1__._9,{options:{..._key__WEBPACK_IMPORTED_MODULE_0__.t,center:[-105.20507,39.77476],zoom:1.4},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(react_azure_maps__WEBPACK_IMPORTED_MODULE_1__.yX,{id:"LineLayer DataSourceProvider",collection,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(react_azure_maps__WEBPACK_IMPORTED_MODULE_1__.we,{type:"LineLayer",options:{strokeColor,strokeWidth,strokeOpacity,blur,lineCap,translate}})})})})})},__WEBPACK_DEFAULT_EXPORT__=LineLayer;LineLayer.__docgenInfo={description:"",methods:[],displayName:"LineLayer"}},"./node_modules/memoizerific sync recursive":module=>{function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="./node_modules/memoizerific sync recursive",module.exports=webpackEmptyContext}}]);