import React, { lazy, Suspense } from 'react';

const Page1lvprv4 = lazy(() => import('./Page'));

const LazyPage1lvprv4 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lvprv4 />
  </Suspense>
);

export { LazyPage1lvprv4 };
