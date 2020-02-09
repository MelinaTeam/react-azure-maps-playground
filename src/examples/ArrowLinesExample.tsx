import React from 'react'
import {Paper} from '@material-ui/core'
import {
    AzureMap,
    AzureMapDataSourceProvider,
    AzureMapLayerProvider,
    AzureMapsProvider,
    IAzureMapOptions
} from 'react-azure-maps'
import {AuthenticationType} from 'azure-maps-control'
import {key} from '../key'
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import {wrapperStyles} from "./RouteExample";
import {calculateLineEndPoints, lineData, renderMultiLine} from "./mapHelper";


function mouseOverSymbolLayer(e: any) {
    console.log('SymbolLayer movesOver', e)
}

function mouseOverLineString(e: any) {
    console.log('LineLayer mouseOver', e)
}

const line1 = [[-70.13671, 37.23032], [-74.09179, 40.71395]]
const line2 = [[-73.91601, 28.99853], [-80.59570, 24.36711], [-88.33007, 24.44714], [-95.00976, 29.30556]]
const line3 = [[-156.00585, 20.79720], [-142.38281, 20.46818], [-127.00195, 31.65338], [-118.82812, 33.65120]]
const line4 = [[-136.49414, 57.23150], [-143.17382, 53.80065], [-130.78125, 46.31658], [-124.27734, 46.07323]]

export const lines: any = [line1, line2, line3, line4]

const imageSprites = {
    id: 'arrow-icon',
    templateName: 'triangle-arrow-up',
    color: 'DarkOrchid',
    secondaryColor: 'DarkOrchid'
}

const option: IAzureMapOptions = {
    authOptions: {
        authType: AuthenticationType.subscriptionKey,
        subscriptionKey: key
    },
    center: [-100.12, 44.63],
    zoom: 3,
    view: 'Auto'
}


const ArrowLineExample: React.FC = () => {
    return (
        <div style={wrapperStyles.map}>
            <Paper elevation={3} style={wrapperStyles.wrapper}>
                <Typography gutterBottom variant="h4">
                    arrows to end of paths
                </Typography>
                <div style={wrapperStyles.map}>
                    <AzureMapsProvider>
                        <AzureMap options={option} imageSprites={[imageSprites]}>
                            <AzureMapDataSourceProvider
                                events={{
                                    dataadded: (e: any) => {
                                        console.log('Data on source added', e)
                                    }
                                }}
                                id={'routeExample AzureMapDataSourceProvider'}
                                options={{}}
                            >
                                <AzureMapLayerProvider
                                    id={'routeExample AzureMapLayerProvider'}
                                    options={{
                                        strokeColor: 'DarkOrchid',
                                        strokeWidth: 3,
                                        iconOptions: {
                                            image: 'arrow-icon',            //Reference the custom created icon.
                                            allowOverlap: true,             //Allow icons to overlay.
                                            anchor: 'top',                  //Want the top of the image to align with the end of the line.
                                            rotationAlignment: 'map',       //Lock icon rotation to the map.
                                            rotation: ['get', 'heading'],   //Rotate the icon based on the heading property of each data point.
                                            size: 0.7                       //Scale the size of the icon.
                                        },
                                        filter: ['==', ['geometry-type'], 'Point'] //Only render point data in this layer and not the coordinates of lines.
                                    }
                                    }
                                    events={{
                                        mouseenter: mouseOverSymbolLayer
                                    }}
                                    lifecycleEvents={{
                                        layeradded: (e: any) => {
                                            console.log('LAYER ADDED TO MAP', e)
                                        }
                                    }}
                                    type={"SymbolLayer"}
                                ></AzureMapLayerProvider>
                                {calculateLineEndPoints(lineData)}
                                <AzureMapLayerProvider
                                    id={'routeExample Line AzureMapLayerProvider'}
                                    options={{
                                        strokeColor: 'DarkOrchid',
                                        strokeWidth: 3,
                                    }
                                    }
                                    events={{
                                        mouseenter: mouseOverLineString
                                    }}
                                    lifecycleEvents={{
                                        layeradded: (e: any) => {
                                            console.log('LINE LAYER ADDED TO MAP', e)
                                        }
                                    }}
                                    type={"LineLayer"}
                                ></AzureMapLayerProvider>
                                {lines.map((value: any) => {
                                    return (renderMultiLine("LineString", value, {}))
                                })}
                            </AzureMapDataSourceProvider>
                        </AzureMap>
                    </AzureMapsProvider>
                </div>
                <Card style={{padding: 5}}>
                    <Typography gutterBottom variant="body1">
                        This sample shows how to add arrow icons along a line on the map. When using a symbol layer, set
                        the "placement" option to "line", this will render the symbols along the line and rotate the
                        icons (0 degrees = right).
                    </Typography>
                </Card>
            </Paper>
        </div>
    )
}

export default ArrowLineExample
