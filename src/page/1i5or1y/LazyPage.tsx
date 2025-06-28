import React, { lazy, Suspense } from 'react';

const Page1i5or1y = lazy(() => import('./Page'));

const LazyPage1i5or1y = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1i5or1y />
  </Suspense>
);

export { LazyPage1i5or1y };
