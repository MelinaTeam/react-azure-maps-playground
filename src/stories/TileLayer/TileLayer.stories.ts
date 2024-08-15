import type { Meta, StoryObj } from '@storybook/react';
import TileLayer from './TileLayer';

const meta: Meta<typeof TileLayer> = {
  title: 'Tile Layer',
  component: TileLayer,
  parameters: {
    storySource: {
      source: `
import { AzureMap, AzureMapsProvider, AzureMapDataSourceProvider, AzureMapLayerProvider } from 'react-azure-maps';

const TileLayer = () => {
  
return (
    <AzureMapsProvider>
      <div className="defaultMap">
        <AzureMap options={{ ...your_options, style: 'night' }}>
          <AzureMapDataSourceProvider id="TileLayer DataSourceProvider">
            <AzureMapLayerProvider
              type="TileLayer"
              options={{
                tileUrl:
                  'https://mrdata.usgs.gov/services/gscworld?FORMAT=image/png&HEIGHT=1024&LAYERS=geology&REQUEST=GetMap&STYLES=default&TILED=true&TRANSPARENT=true&WIDTH=1024&VERSION=1.3.0&SERVICE=WMS&CRS=EPSG:3857&BBOX={bbox-epsg-3857}',
                bounds: [-50, -20, 50, 20], //[west, south, east, north]
                tileSize: 50,
              }}
            />
          </AzureMapDataSourceProvider>
        </AzureMap>
      </div>
    </AzureMapsProvider>
  );
};

export default TileLayer;

`,
    },
  },
  args: {
    bounds: [-50, -20, 50, 20],
    tileSize: 50,
  },
};
export default meta;

type Story = StoryObj<typeof TileLayer>;
export const Example: Story = {};
