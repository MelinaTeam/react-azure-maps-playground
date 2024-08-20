import { mapOptions } from '../../../key';
import { AzureMap, AzureMapsProvider, AzureMapDataSourceProvider, AzureMapLayerProvider } from 'react-azure-maps';
import { TileLayerOptions } from 'azure-maps-control';

const TileLayer = ({ bounds = [-50, -20, 50, 20], tileSize = 50 }: TileLayerOptions) => {
  return (
    <AzureMapsProvider>
      <div className="defaultMap sb-unstyled">
        <AzureMap options={{ ...mapOptions, style: 'night' }}>
          <AzureMapDataSourceProvider id="TileLayer DataSourceProvider">
            <AzureMapLayerProvider
              type="TileLayer"
              options={{
                tileUrl:
                  'https://mrdata.usgs.gov/services/gscworld?FORMAT=image/png&HEIGHT=1024&LAYERS=geology&REQUEST=GetMap&STYLES=default&TILED=true&TRANSPARENT=true&WIDTH=1024&VERSION=1.3.0&SERVICE=WMS&CRS=EPSG:3857&BBOX={bbox-epsg-3857}',
                bounds, //[west, south, east, north]
                tileSize,
              }}
            />
          </AzureMapDataSourceProvider>
        </AzureMap>
      </div>
    </AzureMapsProvider>
  );
};

export default TileLayer;
