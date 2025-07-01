import React, { lazy, Suspense } from 'react';

const Page1losjpq = lazy(() => import('./Page'));

const LazyPage1losjpq = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1losjpq />
  </Suspense>
);

export { LazyPage1losjpq };
