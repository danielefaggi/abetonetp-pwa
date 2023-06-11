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
        
    precacheAndRoute(self.__WB_MANIFEST);

    workbox.routing.setCatchHandler(({event}) => {
        // Return the precached offline page if a document is being requested
        if (event.request.destination === 'document') {
          return workbox.precaching.matchPrecache('/offline.html');
        }
      
        return Response.error();
    });    
}