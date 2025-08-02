import React, { lazy, Suspense } from 'react';

const Page1mfll39 = lazy(() => import('./Page'));

const LazyPage1mfll39 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mfll39 />
  </Suspense>
);

export { LazyPage1mfll39 };
