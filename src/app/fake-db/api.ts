export class ApiFakeDb {
  private static demoSteps = [
    {
      title: 'Introduction',
      content:
        '<h1>Introduction</h1>' +
        '<br>' +
        'Welcome to the Blocksale API! Blocksale API allows you to interact with our platform. ' +
        '<br><br><br>' +
        'Lorem ipsum dolor sit amet, nec vide augue ut. Cum ea mentitum inimicus, quo falli erroribus id, ea populo putent euripidis vel.' +
        'Ex latine delicata definitionem duo, sea id essent oblique invidunt' +
        '<br><br>'
    },
    {
      title: 'Get All Coins',
      content:
        '<h1>Get All Coins</h1>' +
        '<br>' +
        // tslint:disable-next-line:max-line-length
        'Lorem ipsum dolor sit amet, nec vide augue ut. Cum ea mentitum inimicus, quo falli erroribus id, ea populo putent euripidis vel. Ex latine delicata definitionem duo, sea id essent oblique invidunt. Offendit probatus perpetua sea ea, nam no zril solet nostrud.' +
        '<br><br><br><br>' +
        '<h2>Request</h2>' +
        '<br>' +
        '<code>GET https://blocksale.io/api/coins?api_key=<api_key>&api_secret=<api_secret></code>' +
        '<br><br><br><br>' +
        '<h2>URL Parameters</h2>' +
        '<table><tr><th align="left">Parameter</th><th align="left">Required</th><th align="left">Value</th><th align="left">Description</th></tr>' +
        '<tr><td>api_key</td><td>Yes</td><td>Your api key</td><td>API key of your wallet.</td></tr>' +
        '<tr><td>api_secret</td><td>Yes</td><td>Your api secret</td><td>API secret of your wallet.</td></tr>' +
        '</table>'
    },
    {
      title: 'Create Wallet',
      content:
        '<h1>Create Wallet</h1>' +
        '<br>' +
        // tslint:disable-next-line:max-line-length
        'Lorem ipsum dolor sit amet, nec vide augue ut. Cum ea mentitum inimicus, quo falli erroribus id, ea populo putent euripidis vel. Ex latine delicata definitionem duo, sea id essent oblique invidunt. Offendit probatus perpetua sea ea, nam no zril solet nostrud.' +
        '<br><br><br><br>' +
        '<h2>Request</h2>' +
        '<br>' +
        '<code>POST https://blocksale.io/api/wallet?api_key=<api_key>&api_secret=<api_secret></code>' +
        '<br><br><br><br>' +
        '<h2>URL Parameters</h2>' +
        '<table><tr><th align="left">Parameter</th><th align="left">Required</th><th align="left">Value</th><th align="left">Description</th></tr>' +
        '<tr><td>api_key</td><td>Yes</td><td>Your api key</td><td>API key of your wallet.</td></tr>' +
        '<tr><td>api_secret</td><td>Yes</td><td>Your api secret</td><td>API secret of your wallet.</td></tr>' +
        '</table>'
    },
    {
      title: 'Get Wallet',
      content:
        '<h1>Get Wallet</h1>' +
        '<br>' +
        // tslint:disable-next-line:max-line-length
        'Lorem ipsum dolor sit amet, nec vide augue ut. Cum ea mentitum inimicus, quo falli erroribus id, ea populo putent euripidis vel. Ex latine delicata definitionem duo, sea id essent oblique invidunt. Offendit probatus perpetua sea ea, nam no zril solet nostrud.' +
        '<br><br><br><br>' +
        '<h2>Request</h2>' +
        '<br>' +
        '<code>GET https://blocksale.io/api/wallet?api_key=<api_key>&api_secret=<api_secret></code>' +
        '<br><br><br><br>' +
        '<h2>URL Parameters</h2>' +
        '<table><tr><th align="left">Parameter</th><th align="left">Required</th><th align="left">Value</th><th align="left">Description</th></tr>' +
        '<tr><td>api_key</td><td>Yes</td><td>Your api key</td><td>API key of your wallet.</td></tr>' +
        '<tr><td>api_secret</td><td>Yes</td><td>Your api secret</td><td>API secret of your wallet.</td></tr>' +
        '</table>'
    },
    {
      title: 'Update Wallet',
      content:
        '<h1>Update Wallet</h1>' +
        '<br>' +
        // tslint:disable-next-line:max-line-length
        'Lorem ipsum dolor sit amet, nec vide augue ut. Cum ea mentitum inimicus, quo falli erroribus id, ea populo putent euripidis vel. Ex latine delicata definitionem duo, sea id essent oblique invidunt. Offendit probatus perpetua sea ea, nam no zril solet nostrud.' +
        '<br><br><br><br>' +
        '<h2>Request</h2>' +
        '<br>' +
        '<code>PUT https://blocksale.io/api/wallet?api_key=<api_key>&api_secret=<api_secret></code>' +
        '<br><br><br><br>' +
        '<h2>URL Parameters</h2>' +
        '<table><tr><th align="left">Parameter</th><th align="left">Required</th><th align="left">Value</th><th align="left">Description</th></tr>' +
        '<tr><td>api_key</td><td>Yes</td><td>Your api key</td><td>API key of your wallet.</td></tr>' +
        '<tr><td>api_secret</td><td>Yes</td><td>Your api secret</td><td>API secret of your wallet.</td></tr>' +
        '</table>'
    }
  ];

  public static apiContent = {
    title: 'Blocksale API',
    totalSteps: 5,
    updated: 'Jul 31, 2018',
    steps: ApiFakeDb.demoSteps
  };
}
