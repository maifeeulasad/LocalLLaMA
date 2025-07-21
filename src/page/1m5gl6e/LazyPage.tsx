import React, { lazy, Suspense } from 'react';

const Page1m5gl6e = lazy(() => import('./Page'));

const LazyPage1m5gl6e = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m5gl6e />
  </Suspense>
);

export { LazyPage1m5gl6e };
