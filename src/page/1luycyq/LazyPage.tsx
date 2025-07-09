import React, { lazy, Suspense } from 'react';

const Page1luycyq = lazy(() => import('./Page'));

const LazyPage1luycyq = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1luycyq />
  </Suspense>
);

export { LazyPage1luycyq };
