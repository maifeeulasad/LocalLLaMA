import React, { lazy, Suspense } from 'react';

const Page1lurzqf = lazy(() => import('./Page'));

const LazyPage1lurzqf = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lurzqf />
  </Suspense>
);

export { LazyPage1lurzqf };
