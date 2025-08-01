import React, { lazy, Suspense } from 'react';

const Page1meju07 = lazy(() => import('./Page'));

const LazyPage1meju07 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1meju07 />
  </Suspense>
);

export { LazyPage1meju07 };
