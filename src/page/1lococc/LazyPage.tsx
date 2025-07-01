import React, { lazy, Suspense } from 'react';

const Page1lococc = lazy(() => import('./Page'));

const LazyPage1lococc = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lococc />
  </Suspense>
);

export { LazyPage1lococc };
