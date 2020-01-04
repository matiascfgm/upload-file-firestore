// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

import {firestoreKey} from '../app/enums/firestoreKey.enum';

export const environment = {
  production: false,
  firebase: {
    apiKey: firestoreKey.apiKey,
    authDomain: 'upload-file-66751.firebaseapp.com',
    databaseURL: 'https://upload-file-66751.firebaseio.com',
    projectId: 'upload-file-66751',
    storageBucket: 'upload-file-66751.appspot.com',
    messagingSenderId: '341644291296',
    appId: '1:341644291296:web:2edf282000ecc26ac03485',
    measurementId: firestoreKey.appId
  },
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
