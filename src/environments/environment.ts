// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  environemt  : 'DEV',
  production  : false,
//  BASE_URL    : 'http://localhost:4200',
  BASE_URL    : 'https://cvxcustomerportaldev.azurewebsites.net',
  API_URL     : 'https://cvizdevapim.azure-api.net/customerapi',
  API_URL_KEY : '62e6296aa9754af2b9b8fe4f96eaccca'
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
