import React, { lazy, Suspense } from 'react';

const Page1mfj6fq = lazy(() => import('./Page'));

const LazyPage1mfj6fq = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mfj6fq />
  </Suspense>
);

export { LazyPage1mfj6fq };
