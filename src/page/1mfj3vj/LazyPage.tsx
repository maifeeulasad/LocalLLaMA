import React, { lazy, Suspense } from 'react';

const Page1mfj3vj = lazy(() => import('./Page'));

const LazyPage1mfj3vj = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mfj3vj />
  </Suspense>
);

export { LazyPage1mfj3vj };
