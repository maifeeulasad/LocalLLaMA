import React, { lazy, Suspense } from 'react';

const Page1m88s09 = lazy(() => import('./Page'));

const LazyPage1m88s09 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m88s09 />
  </Suspense>
);

export { LazyPage1m88s09 };
