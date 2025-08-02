import React, { lazy, Suspense } from 'react';

const Page1mexa2g = lazy(() => import('./Page'));

const LazyPage1mexa2g = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mexa2g />
  </Suspense>
);

export { LazyPage1mexa2g };
