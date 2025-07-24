import React, { lazy, Suspense } from 'react';

const Page1m7jybm = lazy(() => import('./Page'));

const LazyPage1m7jybm = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m7jybm />
  </Suspense>
);

export { LazyPage1m7jybm };
