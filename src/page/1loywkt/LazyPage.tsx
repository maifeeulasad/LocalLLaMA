import React, { lazy, Suspense } from 'react';

const Page1loywkt = lazy(() => import('./Page'));

const LazyPage1loywkt = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1loywkt />
  </Suspense>
);

export { LazyPage1loywkt };
