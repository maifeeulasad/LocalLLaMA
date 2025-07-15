import React, { lazy, Suspense } from 'react';

const Page1m03sio = lazy(() => import('./Page'));

const LazyPage1m03sio = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m03sio />
  </Suspense>
);

export { LazyPage1m03sio };
