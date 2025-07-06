import React, { lazy, Suspense } from 'react';

const Page1lslglw = lazy(() => import('./Page'));

const LazyPage1lslglw = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lslglw />
  </Suspense>
);

export { LazyPage1lslglw };
