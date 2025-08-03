import React, { lazy, Suspense } from 'react';

const Page1mfuiri = lazy(() => import('./Page'));

const LazyPage1mfuiri = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mfuiri />
  </Suspense>
);

export { LazyPage1mfuiri };
