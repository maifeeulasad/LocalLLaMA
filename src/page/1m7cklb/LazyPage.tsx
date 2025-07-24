import React, { lazy, Suspense } from 'react';

const Page1m7cklb = lazy(() => import('./Page'));

const LazyPage1m7cklb = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m7cklb />
  </Suspense>
);

export { LazyPage1m7cklb };
