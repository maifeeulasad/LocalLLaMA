import React, { lazy, Suspense } from 'react';

const Page1luwtdr = lazy(() => import('./Page'));

const LazyPage1luwtdr = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1luwtdr />
  </Suspense>
);

export { LazyPage1luwtdr };
