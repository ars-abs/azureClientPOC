require('isomorphic-fetch');
const { peek } = require('@laufire/utils/debug');
const azureClient = require('./azureClient');

const setPermission = async () => {
  const sites = await azureClient.api(`/sites`).get();

  peek(sites)

  // const siteId = 'unknown'

  // const payload = {
  //   roles: ["read","write"],
  //   grantedToIdentities: [{
  //     application: {
  //       id: "49928464-53eb-4361-8508-1f130e476ab6",
  //       displayName: "Test-App"
  //     }
  //   }]
  // }
  // const granted = await azureClient.api(`/sites/${siteId}/permissions`).post(payload);

  // peek(granted)

}

setPermission();
