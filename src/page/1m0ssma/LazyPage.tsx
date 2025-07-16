import React, { lazy, Suspense } from 'react';

const Page1m0ssma = lazy(() => import('./Page'));

const LazyPage1m0ssma = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m0ssma />
  </Suspense>
);

export { LazyPage1m0ssma };
