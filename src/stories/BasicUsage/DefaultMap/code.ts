export const code = `
import { AzureMap, AzureMapsProvider, IAzureMapOptions, AuthenticationType } from 'react-azure-maps';

const option: IAzureMapOptions = {
  authOptions: {
    authType: AuthenticationType.subscriptionKey,
    subscriptionKey: Your_Subscription_Key,
  },
};

const DefaultMap = () => (
  <AzureMapsProvider>
    <div>
      <AzureMap options={option} />
    </div>
  </AzureMapsProvider>
);
`;
