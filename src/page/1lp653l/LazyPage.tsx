import React, { lazy, Suspense } from 'react';

const Page1lp653l = lazy(() => import('./Page'));

const LazyPage1lp653l = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lp653l />
  </Suspense>
);

export { LazyPage1lp653l };
