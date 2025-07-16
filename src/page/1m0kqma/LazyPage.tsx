import React, { lazy, Suspense } from 'react';

const Page1m0kqma = lazy(() => import('./Page'));

const LazyPage1m0kqma = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m0kqma />
  </Suspense>
);

export { LazyPage1m0kqma };
