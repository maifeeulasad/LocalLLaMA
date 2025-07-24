import React, { lazy, Suspense } from 'react';

const Page1m7wr2x = lazy(() => import('./Page'));

const LazyPage1m7wr2x = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m7wr2x />
  </Suspense>
);

export { LazyPage1m7wr2x };
