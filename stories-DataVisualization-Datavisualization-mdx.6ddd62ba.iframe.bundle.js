(self.webpackChunkazure_maps_storybook=self.webpackChunkazure_maps_storybook||[]).push([[732],{"./node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{R:()=>useMDXComponents,x:()=>MDXProvider});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const emptyComponents={},MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext(emptyComponents);function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((function(){return"function"==typeof components?components(contextComponents):{...contextComponents,...components}}),[contextComponents,components])}function MDXProvider(properties){let allComponents;return allComponents=properties.disableParentContext?"function"==typeof properties.components?properties.components(emptyComponents):properties.components||emptyComponents:useMDXComponents(properties.components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},properties.children)}},"./src/stories/DataVisualization/Datavisualization.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>MDXContent});__webpack_require__("./node_modules/react/index.js");var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js"),_home_runner_work_react_azure_maps_playground_react_azure_maps_playground_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim_mjs__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs"),_ClusterAggregates_ClusterAggregates__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/stories/DataVisualization/ClusterAggregates/ClusterAggregates.tsx");function _createMdxContent(props){const _components={code:"code",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",strong:"strong",...(0,_home_runner_work_react_azure_maps_playground_react_azure_maps_playground_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim_mjs__WEBPACK_IMPORTED_MODULE_3__.R)(),...props.components};return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.W8,{title:"Data Visualization/Introduction"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h1,{id:"data-visualization",children:"Data Visualization"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.strong,{children:"react-azure-maps"})," provides a set of components to help you visualize data on a map like this: ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("br",{})]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_ClusterAggregates_ClusterAggregates__WEBPACK_IMPORTED_MODULE_2__.A,{showBubbles:!0,showNumbers:!0}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:"We will need two kinds of components to visualize data on a map:"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.ol,{children:["\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.li,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"<AzureMapDataSourceProvider>"}),": to provide your data to the map."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.li,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"<AzureMapLayerProvider>"}),": to create a visualization layer on the map based on your data."]}),"\n"]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:"Therefore, the basic structure of a data visualization component is as follows:"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.kL,{code:'\nimport { AzureMap, AzureMapsProvider, AzureMapDataSourceProvider, AzureMapLayerProvider } from \'react-azure-maps\';\n\nconst Your_Component = () => {\n  return (\n    <AzureMapsProvider>\n      <AzureMap options={your_options}>\n        <AzureMapDataSourceProvider id="your_layer_id" collection={your_data}>\n          <AzureMapLayerProvider type="layer_type" options={your_layer_options} />\n        </AzureMapDataSourceProvider>\n      </AzureMap>\n    </AzureMapsProvider>\n  );\n};\n'}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"create-a-data-source",children:"Create a data source"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:["To create a data source, you can pass the data to the ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"collection"})," prop in various ways: ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("br",{})]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:"You can specify a location by passing a data point:"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.kL,{code:"\n<AzureMapDataSourceProvider \n    collection = { new atlas.data.Point([0,0]) }\n    > ..."}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:["Add more details via the ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"Feature"})," object like this: ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("br",{})]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.kL,{code:"<AzureMapDataSourceProvider \n    collection = { atlas.data.Feature(new atlas.data.Point([0,0])) }\n    > ..."}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:["An array of data points is accepted: ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("br",{})]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.kL,{code:"\n<AzureMapDataSourceProvider \n    collection = {[\n        new atlas.data.Point([-73.985708, 40.75773]),\n        new atlas.data.Point([-73.985600, 40.76542]),\n        new atlas.data.Point([-73.985550, 40.77900]),\n        new atlas.data.Point([-73.975550, 40.74859]),\n        new atlas.data.Point([-73.968900, 40.78859])]}\n        > ..."}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:["You can also provide the data by passing the ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"dataFromUrl"})," prop like this: ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("br",{})]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.kL,{code:'\n<AzureMapDataSourceProvider \n    dataFromUrl="https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_month.geojson">\n    ...\n</AzureMapDataSourceProvider>\n'}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("br",{}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:["Now that you have created a data source, you can create a visualization layer on the map. ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("br",{}),"\nSee examples below for further details."]})]})}function MDXContent(props={}){const{wrapper:MDXLayout}={...(0,_home_runner_work_react_azure_maps_playground_react_azure_maps_playground_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim_mjs__WEBPACK_IMPORTED_MODULE_3__.R)(),...props.components};return MDXLayout?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(MDXLayout,{...props,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_createMdxContent,{...props})}):_createMdxContent(props)}},"./node_modules/@storybook/core/dist/components sync recursive":module=>{function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="./node_modules/@storybook/core/dist/components sync recursive",module.exports=webpackEmptyContext},"./node_modules/@storybook/core/dist/theming sync recursive":module=>{function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="./node_modules/@storybook/core/dist/theming sync recursive",module.exports=webpackEmptyContext},"./src/key.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{t:()=>mapOptions});const mapOptions={authOptions:{authType:__webpack_require__("./node_modules/react-azure-maps/dist/react-azure-maps.es5.js").h_.anonymous,clientId:"2a60774c-f588-423b-b004-56d213773ee6",getToken:(resolve,reject)=>{fetch("https://anonymous-auth.azurewebsites.net/api/GetAccessToken-Prod").then((result=>result.text())).then((result=>resolve(result))).catch((error=>reject(new Error("Failed to fetch anon auth token: ".concat(error.message)))))}},center:[0,0],view:"Auto"}},"./src/stories/DataVisualization/ClusterAggregates/ClusterAggregates.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var react_azure_maps__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react-azure-maps/dist/react-azure-maps.es5.js"),_key__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/key.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/jsx-runtime.js");const option={..._key__WEBPACK_IMPORTED_MODULE_1__.t,center:[-97,39],zoom:1.5,view:"Auto"},bubbleLayer=(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react_azure_maps__WEBPACK_IMPORTED_MODULE_0__.we,{id:"BubbleLayer LayerProvider",options:{radius:["step",["get","point_count"],20,100,30,750,40],color:["step",["get","point_count"],"rgba(0,255,0,0.8)",100,"rgba(255,255,0,0.8)",750,"rgba(255,0,0,0.8)"],strokeWidth:0,filter:["has","point_count"]},type:"BubbleLayer"}),symbolLayer=(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react_azure_maps__WEBPACK_IMPORTED_MODULE_0__.we,{id:"NumberLayer2 LayerProvider",options:{iconOptions:{image:"none"},textOptions:{textField:["get","point_count_abbreviated"],offset:[0,.4]}},type:"SymbolLayer"}),ClusterAggregates=_ref=>{let{showBubbles,showNumbers}=_ref;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react_azure_maps__WEBPACK_IMPORTED_MODULE_0__.oY,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div",{className:"defaultMap sb-unstyled",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react_azure_maps__WEBPACK_IMPORTED_MODULE_0__._9,{options:option,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(react_azure_maps__WEBPACK_IMPORTED_MODULE_0__.yX,{id:"ClusterAggregates DataSourceProvider",dataFromUrl:"https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_month.geojson",options:{cluster:!0,clusterRadius:45,clusterMaxZoom:15},children:[showBubbles?bubbleLayer:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment,{}),showNumbers?symbolLayer:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment,{})]})})})})},__WEBPACK_DEFAULT_EXPORT__=ClusterAggregates;ClusterAggregates.__docgenInfo={description:"",methods:[],displayName:"ClusterAggregates",props:{showBubbles:{required:!0,tsType:{name:"boolean"},description:""},showNumbers:{required:!0,tsType:{name:"boolean"},description:""}}}},"./node_modules/memoizerific sync recursive":module=>{function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="./node_modules/memoizerific sync recursive",module.exports=webpackEmptyContext}}]);