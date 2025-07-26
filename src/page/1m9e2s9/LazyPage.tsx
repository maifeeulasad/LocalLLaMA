import React, { lazy, Suspense } from 'react';

const Page1m9e2s9 = lazy(() => import('./Page'));

const LazyPage1m9e2s9 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m9e2s9 />
  </Suspense>
);

export { LazyPage1m9e2s9 };
