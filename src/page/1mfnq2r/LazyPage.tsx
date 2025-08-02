import React, { lazy, Suspense } from 'react';

const Page1mfnq2r = lazy(() => import('./Page'));

const LazyPage1mfnq2r = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mfnq2r />
  </Suspense>
);

export { LazyPage1mfnq2r };
