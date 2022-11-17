// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  apiUrl : 'http://localhost:3000/Wallet_Balances',
  contUrl : 'http://localhost:3000/gifts',
  redUrl : 'http://localhost:3000/gift_redemptions',
  buyUrl : 'http://localhost:3000/gift_accounts',
  messUrl : 'http://localhost:3000/outgoing_msg',
  usersUrl : 'http://localhost:3000/users',
  sessUrl : 'http://localhost:3000/sessions',
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
