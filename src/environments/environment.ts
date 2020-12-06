// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  api: {
    inicio: 'http://localhost:8000/api/inicio/',
    yo: 'http://localhost:8000/api/yo/',
    catalogo: 'http://localhost:8000/api/catalogo/',
    eventos: 'http://localhost:8000/api/eventos/',
    amigos: 'http://localhost:8000/api/amigo/'

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
