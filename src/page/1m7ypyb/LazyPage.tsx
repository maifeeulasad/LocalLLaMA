import React, { lazy, Suspense } from 'react';

const Page1m7ypyb = lazy(() => import('./Page'));

const LazyPage1m7ypyb = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m7ypyb />
  </Suspense>
);

export { LazyPage1m7ypyb };
