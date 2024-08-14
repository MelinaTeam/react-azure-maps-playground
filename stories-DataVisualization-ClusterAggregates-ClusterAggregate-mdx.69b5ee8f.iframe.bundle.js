(self.webpackChunkazure_maps_storybook=self.webpackChunkazure_maps_storybook||[]).push([[376],{"./node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{R:()=>useMDXComponents,x:()=>MDXProvider});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const emptyComponents={},MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext(emptyComponents);function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((function(){return"function"==typeof components?components(contextComponents):{...contextComponents,...components}}),[contextComponents,components])}function MDXProvider(properties){let allComponents;return allComponents=properties.disableParentContext?"function"==typeof properties.components?properties.components(emptyComponents):properties.components||emptyComponents:useMDXComponents(properties.components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},properties.children)}},"./node_modules/@storybook/addon-docs/dist/blocks.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{W8:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.W8,kL:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.kL});var storybook_internal_client_logger__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("storybook/internal/client-logger"),_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs");(0,storybook_internal_client_logger__WEBPACK_IMPORTED_MODULE_0__.deprecate)("Import from '@storybook/addon-docs/blocks' is deprecated. Please import from '@storybook/blocks' instead.")},"./src/stories/DataVisualization/ClusterAggregates/ClusterAggregate.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>MDXContent});__webpack_require__("./node_modules/react/index.js");var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),lib=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),blocks=__webpack_require__("./node_modules/@storybook/addon-docs/dist/blocks.mjs"),react_azure_maps_es5=__webpack_require__("./node_modules/react-azure-maps/dist/react-azure-maps.es5.js"),atlas_esm_min=__webpack_require__("./node_modules/azure-maps-control/dist/atlas-esm.min.js"),key=__webpack_require__("./src/key.ts");const ClusterAggregates_option={authOptions:{authType:atlas_esm_min.h_.subscriptionKey,subscriptionKey:key.E},center:[-97,39],zoom:1.5,view:"Auto"},bubbleLayer=(0,jsx_runtime.jsx)(react_azure_maps_es5.we,{id:"BubbleLayer LayerProvider",options:{radius:["step",["get","point_count"],20,100,30,750,40],color:["step",["get","point_count"],"rgba(0,255,0,0.8)",100,"rgba(255,255,0,0.8)",750,"rgba(255,0,0,0.8)"],strokeWidth:0,filter:["has","point_count"]},type:"BubbleLayer"}),symbolLayer=(0,jsx_runtime.jsx)(react_azure_maps_es5.we,{id:"NumberLayer2 LayerProvider",options:{iconOptions:{image:"none"},textOptions:{textField:["get","point_count_abbreviated"],offset:[0,.4]}},type:"SymbolLayer"}),ClusterAggregates=_ref=>{let{showBubbles,showNumbers}=_ref;return(0,jsx_runtime.jsx)(react_azure_maps_es5.oY,{children:(0,jsx_runtime.jsx)("div",{className:"defaultMap sb-unstyled",children:(0,jsx_runtime.jsx)(react_azure_maps_es5._9,{options:ClusterAggregates_option,children:(0,jsx_runtime.jsxs)(react_azure_maps_es5.yX,{id:"ClusterAggregates DataSourceProvider",dataFromUrl:"https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_month.geojson",options:{cluster:!0,clusterRadius:45,clusterMaxZoom:15},children:[showBubbles?bubbleLayer:(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{}),showNumbers?symbolLayer:(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{})]})})})})},ClusterAggregates_ClusterAggregates=ClusterAggregates;function _createMdxContent(props){const _components={code:"code",h1:"h1",li:"li",p:"p",strong:"strong",ul:"ul",...(0,lib.R)(),...props.components};return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(blocks.W8,{title:"Data Visualization/Cluster Aggregates"}),"\n",(0,jsx_runtime.jsx)(_components.h1,{id:"cluster-aggregates",children:"Cluster Aggregates"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"This example shows how to enable point based clustering on a data source and render them differently from individual points on the map.\nClustered points have four properties;"}),"\n",(0,jsx_runtime.jsxs)(_components.ul,{children:["\n",(0,jsx_runtime.jsxs)(_components.li,{children:[(0,jsx_runtime.jsx)(_components.code,{children:"cluster"})," - A boolean value indicating that it is a cluster."]}),"\n",(0,jsx_runtime.jsxs)(_components.li,{children:[(0,jsx_runtime.jsx)(_components.code,{children:"cluster_id"})," - A unique id for the cluster which can be used with the DataSource getClusterExpansionZoom, getClusterChildren, and getClusterLeaves functions."]}),"\n",(0,jsx_runtime.jsxs)(_components.li,{children:[(0,jsx_runtime.jsx)(_components.code,{children:"point_count"})," - The number of points the cluster contains."]}),"\n",(0,jsx_runtime.jsxs)(_components.li,{children:[(0,jsx_runtime.jsx)(_components.code,{children:"point_count_abbreviated"})," - A string that abbreviates the point_count value if it is long. (i.e. 4,000 becomes 4K)"]}),"\n"]}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"You can observe the clusters by zooming in and out on the map."}),"\n",(0,jsx_runtime.jsx)(ClusterAggregates_ClusterAggregates,{showBubbles:!0,showNumbers:!0}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:["In this example, we use a ",(0,jsx_runtime.jsx)(_components.strong,{children:"Bubble Layer"})," to render the clusters as circles and a ",(0,jsx_runtime.jsx)(_components.strong,{children:"Symbol Layer"})," to render the number of points in each cluster.\nFor the bubble layer, we set the radius and the color to change based on the number of points in the cluster."]}),"\n",(0,jsx_runtime.jsx)(blocks.kL,{code:"\nconst bubbleLayerOptions = {\n  //Scale the size of the clustered bubble based on the number of points inthe cluster.\n  radius: [\n    'step',\n    ['get', 'point_count'],\n    20, //Default of 20 pixel radius.\n    100,\n    30, //If point_count >= 100, radius is 30 pixels.\n    750,\n    40, //If point_count >= 750, radius is 40 pixels.\n  ],\n\n  //Change the color of the cluster based on the value on the point_cluster property of the cluster.\n  color: [\n    'step',\n    ['get', 'point_count'],\n    'rgba(0,255,0,0.8)', //Default to green.\n    100,\n    'rgba(255,255,0,0.8)', //If the point_count >= 100, color is yellow.\n    750,\n    'rgba(255,0,0,0.8)', //If the point_count >= 100, color is red.\n  ],\n  strokeWidth: 0,\n  filter: ['has', 'point_count'], //Only rendered data points which have a point_count property, which clusters do.\n};\n"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"For the symbol layer, we set the text to be the point_count_abbreviated property of the cluster."}),"\n",(0,jsx_runtime.jsx)(blocks.kL,{code:"\nconst symbolLayerOptions = {\n  iconOptions: {\n    image: 'none', //Hide the icon image.\n  },\n  textOptions: {\n    textField: ['get', 'point_count_abbreviated'],\n    offset: [0, 0.4],\n  },\n};\n"}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:["Finally, we set the options of the ",(0,jsx_runtime.jsx)(_components.strong,{children:"AzureMapDataSourceProvider"})," to enable clustering."]}),"\n",(0,jsx_runtime.jsx)(blocks.kL,{code:'\nimport {\n  AzureMap,\n  AzureMapDataSourceProvider,\n  AzureMapLayerProvider,\n  AzureMapsProvider,\n} from \'react-azure-maps\';\n\nconst ClusterAggregates = ({ showBubbles, showNumbers }: ClusterAggregatesProps) => {\n  \n  return (\n      <AzureMapsProvider>\n        <div className="defaultMap">\n          <AzureMap options={your_option}>\n            <AzureMapDataSourceProvider\n              id="ClusterAggregates DataSourceProvider"\n              dataFromUrl="https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_month.geojson"\n              options={{\n                //Tell the data source to cluster point data.\n                cluster: true,\n                //The radius in pixels to cluster points together.\n                clusterRadius: 45,\n                //The maximium zoom level in which clustering occurs.\n                //If you zoom in more than this, all points are rendered as symbols.\n                clusterMaxZoom: 15,\n              }}\n            >\n              <AzureMapLayerProvider\n                  id={\'BubbleLayer LayerProvider\'}\n                  options={bubbleLayerOptions}\n                  type="BubbleLayer"\n              ></AzureMapLayerProvider>\n              <AzureMapLayerProvider\n                  id={\'NumberLayer2 LayerProvider\'}\n                  options={symbolLayerOptions}\n                  type="SymbolLayer"\n              ></AzureMapLayerProvider>\n            </AzureMapDataSourceProvider>\n          </AzureMap>\n        </div>\n      </AzureMapsProvider>\n  );\n};\n'})]})}function MDXContent(props={}){const{wrapper:MDXLayout}={...(0,lib.R)(),...props.components};return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,{...props,children:(0,jsx_runtime.jsx)(_createMdxContent,{...props})}):_createMdxContent(props)}ClusterAggregates.__docgenInfo={description:"",methods:[],displayName:"ClusterAggregates",props:{showBubbles:{required:!0,tsType:{name:"boolean"},description:""},showNumbers:{required:!0,tsType:{name:"boolean"},description:""}}}},"./node_modules/@storybook/core/dist/components sync recursive":module=>{function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="./node_modules/@storybook/core/dist/components sync recursive",module.exports=webpackEmptyContext},"./node_modules/@storybook/core/dist/theming sync recursive":module=>{function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="./node_modules/@storybook/core/dist/theming sync recursive",module.exports=webpackEmptyContext},"./src/key.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{E:()=>key,t:()=>mapOptions});var react_azure_maps__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react-azure-maps/dist/react-azure-maps.es5.js");const key="013GHvO6nMXUbB0yrRDmgizOaO3tRzevKMzPA6Yl4PeFMPgqFuelJQQJ99AGACrJL3JAArohAAAgAZMPQDp7",mapOptions={authOptions:{authType:react_azure_maps__WEBPACK_IMPORTED_MODULE_0__.h_.subscriptionKey,subscriptionKey:key},center:[0,0],view:"Auto"}},"./node_modules/memoizerific sync recursive":module=>{function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="./node_modules/memoizerific sync recursive",module.exports=webpackEmptyContext}}]);