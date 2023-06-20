/* eslint-disable no-restricted-globals */
/* eslint-env serviceworker */

if( 'function' === typeof importScripts) {

    importScripts('./workbox/workbox-v7.0.0/workbox-sw.js');
    
    workbox.setConfig({
      modulePathPrefix: './workbox/workbox-v7.0.0/',
    });

    const {precacheAndRoute} = workbox.precaching;
    //const {registerRoute} = workbox.routing;
    //const {StaleWhileRevalidate} = workbox.strategies;

    console.log('Service worker start');

    const resourcesToCache = self.__WB_MANIFEST;
    precacheAndRoute(resourcesToCache);
    // Cambiare il nome della cache usata da workbox-precaching
    workbox.core.setCacheNameDetails({
      prefix: 'abetonetp',
      suffix: 'v1',
      precache: 'assets'
    });
    // Il nuovo nome della cache
    console.log('Cache name:' + workbox.core.cacheNames.precache);


    workbox.routing.setCatchHandler(({event}) => {
        // Return the precached offline page if a document is being requested
        if (event.request.destination === 'document') {
          return workbox.precaching.matchPrecache('/offline.html');
        }
      
        return Response.error();
    });    

}