import React, { lazy, Suspense } from 'react';

const Page1meeyee = lazy(() => import('./Page'));

const LazyPage1meeyee = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1meeyee />
  </Suspense>
);

export { LazyPage1meeyee };
