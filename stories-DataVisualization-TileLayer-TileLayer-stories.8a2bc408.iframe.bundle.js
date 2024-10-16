"use strict";(self.webpackChunkazure_maps_storybook=self.webpackChunkazure_maps_storybook||[]).push([[777],{"./src/stories/DataVisualization/TileLayer/TileLayer.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Example:()=>Example,__namedExportsOrder:()=>__namedExportsOrder,default:()=>TileLayer_stories});var key=__webpack_require__("./src/key.ts"),react_azure_maps_es5=__webpack_require__("./node_modules/react-azure-maps/dist/react-azure-maps.es5.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const TileLayer=_ref=>{let{bounds=[-50,-20,50,20],tileSize=50}=_ref;return(0,jsx_runtime.jsx)(react_azure_maps_es5.oY,{children:(0,jsx_runtime.jsx)("div",{className:"defaultMap sb-unstyled",children:(0,jsx_runtime.jsx)(react_azure_maps_es5._9,{options:{...key.t,style:"night"},children:(0,jsx_runtime.jsx)(react_azure_maps_es5.yX,{id:"TileLayer DataSourceProvider",children:(0,jsx_runtime.jsx)(react_azure_maps_es5.we,{type:"TileLayer",options:{tileUrl:"https://mrdata.usgs.gov/services/gscworld?FORMAT=image/png&HEIGHT=1024&LAYERS=geology&REQUEST=GetMap&STYLES=default&TILED=true&TRANSPARENT=true&WIDTH=1024&VERSION=1.3.0&SERVICE=WMS&CRS=EPSG:3857&BBOX={bbox-epsg-3857}",bounds,tileSize}})})})})})},TileLayer_TileLayer=TileLayer;TileLayer.__docgenInfo={description:"",methods:[],displayName:"TileLayer",props:{bounds:{defaultValue:{value:"[-50, -20, 50, 20]",computed:!1},required:!1},tileSize:{defaultValue:{value:"50",computed:!1},required:!1}}};const TileLayer_stories={title:"Data Visualization/Tile Layer",component:TileLayer_TileLayer,parameters:{storySource:{source:"\nimport { AzureMap, AzureMapsProvider, AzureMapDataSourceProvider, AzureMapLayerProvider } from 'react-azure-maps';\n\nconst TileLayer = () => {\n  \nreturn (\n    <AzureMapsProvider>\n      <AzureMap options={{ ...your_options, style: 'night' }}>\n        <AzureMapDataSourceProvider id=\"TileLayer DataSourceProvider\">\n          <AzureMapLayerProvider\n            type=\"TileLayer\"\n            options={{\n              tileUrl:\n                'https://mrdata.usgs.gov/services/gscworld?FORMAT=image/png&HEIGHT=1024&LAYERS=geology&REQUEST=GetMap&STYLES=default&TILED=true&TRANSPARENT=true&WIDTH=1024&VERSION=1.3.0&SERVICE=WMS&CRS=EPSG:3857&BBOX={bbox-epsg-3857}',\n              bounds: [-50, -20, 50, 20], //[west, south, east, north]\n              tileSize: 50,\n            }}\n          />\n        </AzureMapDataSourceProvider>\n      </AzureMap>\n    </AzureMapsProvider>\n  );\n};\n"}},args:{bounds:[-50,-20,50,20],tileSize:50}},Example={},__namedExportsOrder=["Example"];Example.parameters={...Example.parameters,docs:{...Example.parameters?.docs,source:{originalSource:"{}",...Example.parameters?.docs?.source}}}},"./src/key.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{t:()=>mapOptions});const mapOptions={authOptions:{authType:__webpack_require__("./node_modules/react-azure-maps/dist/react-azure-maps.es5.js").h_.anonymous,clientId:"2a60774c-f588-423b-b004-56d213773ee6",getToken:(resolve,reject)=>{fetch("https://anonymous-auth.azurewebsites.net/api/GetAccessToken-Prod").then((result=>result.text())).then((result=>resolve(result))).catch((error=>reject(new Error("Failed to fetch anon auth token: ".concat(error.message)))))}},center:[0,0],view:"Auto"}}}]);