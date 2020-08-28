// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  url: 'https://findusapi.herokuapp.com',
  firebaseConfig : {
    apiKey: 'AIzaSyCukEmUJxhEr-POEaNfvTVmSWNFYApBdPY',
    authDomain: 'findus-612bc.firebaseapp.com',
    databaseURL: 'https://findus-612bc.firebaseio.com',
    projectId: 'findus-612bc',
    storageBucket: 'findus-612bc.appspot.com',
    messagingSenderId: '991806799248',
    appId: '1:991806799248:web:2a684fe758e057c3ee4715'
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
