import React, { lazy, Suspense } from 'react';

const Page1mhix7d = lazy(() => import('./Page'));

const LazyPage1mhix7d = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mhix7d />
  </Suspense>
);

export { LazyPage1mhix7d };
