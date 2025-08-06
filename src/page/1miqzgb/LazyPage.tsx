import React, { lazy, Suspense } from 'react';

const Page1miqzgb = lazy(() => import('./Page'));

const LazyPage1miqzgb = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1miqzgb />
  </Suspense>
);

export { LazyPage1miqzgb };
