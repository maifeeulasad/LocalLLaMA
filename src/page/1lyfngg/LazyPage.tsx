import React, { lazy, Suspense } from 'react';

const Page1lyfngg = lazy(() => import('./Page'));

const LazyPage1lyfngg = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lyfngg />
  </Suspense>
);

export { LazyPage1lyfngg };
