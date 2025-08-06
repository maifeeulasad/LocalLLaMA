import React, { lazy, Suspense } from 'react';

const Page1misyvc = lazy(() => import('./Page'));

const LazyPage1misyvc = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1misyvc />
  </Suspense>
);

export { LazyPage1misyvc };
