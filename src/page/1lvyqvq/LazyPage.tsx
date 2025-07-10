import React, { lazy, Suspense } from 'react';

const Page1lvyqvq = lazy(() => import('./Page'));

const LazyPage1lvyqvq = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lvyqvq />
  </Suspense>
);

export { LazyPage1lvyqvq };
