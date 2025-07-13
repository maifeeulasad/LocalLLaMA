import React, { lazy, Suspense } from 'react';

const Page1lya4ks = lazy(() => import('./Page'));

const LazyPage1lya4ks = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lya4ks />
  </Suspense>
);

export { LazyPage1lya4ks };
