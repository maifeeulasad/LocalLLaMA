import React, { lazy, Suspense } from 'react';

const Page1mhaw4g = lazy(() => import('./Page'));

const LazyPage1mhaw4g = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mhaw4g />
  </Suspense>
);

export { LazyPage1mhaw4g };
