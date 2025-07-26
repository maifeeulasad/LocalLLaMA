import React, { lazy, Suspense } from 'react';

const Page1m9rhgf = lazy(() => import('./Page'));

const LazyPage1m9rhgf = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m9rhgf />
  </Suspense>
);

export { LazyPage1m9rhgf };
