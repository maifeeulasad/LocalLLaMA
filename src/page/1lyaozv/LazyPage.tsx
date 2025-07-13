import React, { lazy, Suspense } from 'react';

const Page1lyaozv = lazy(() => import('./Page'));

const LazyPage1lyaozv = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lyaozv />
  </Suspense>
);

export { LazyPage1lyaozv };
