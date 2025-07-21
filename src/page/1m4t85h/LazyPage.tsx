import React, { lazy, Suspense } from 'react';

const Page1m4t85h = lazy(() => import('./Page'));

const LazyPage1m4t85h = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m4t85h />
  </Suspense>
);

export { LazyPage1m4t85h };
