import { IAzureMapOptions, AuthenticationType } from 'react-azure-maps';

// export const mapOptions: IAzureMapOptions = {
//   authOptions: {
//     authType: AuthenticationType.anonymous,
//     clientId: '2a60774c-f588-423b-b004-56d213773ee6',
//     getToken: (resolve, reject) => {
//       fetch('https://anonymous-auth.azurewebsites.net/api/GetAccessToken-Prod')
//         .then((result) => result.text())
//         .then((result) => resolve(result))
//         .catch((error) => reject(new Error(`Failed to fetch anon auth token: ${error.message}`)));
//     },
//   },
//   center: [0, 0],
//   view: 'Auto',
// };

export const mapOptions: IAzureMapOptions = {
  authOptions: {
    authType: AuthenticationType.subscriptionKey,
    subscriptionKey: '013GHvO6nMXUbB0yrRDmgizOaO3tRzevKMzPA6Yl4PeFMPgqFuelJQQJ99AGACrJL3JAArohAAAgAZMPQDp7',
  },
  center: [0, 0],
  view: 'Auto',
};
