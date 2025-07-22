import React, { lazy, Suspense } from 'react';

const Page1m69th7 = lazy(() => import('./Page'));

const LazyPage1m69th7 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m69th7 />
  </Suspense>
);

export { LazyPage1m69th7 };
