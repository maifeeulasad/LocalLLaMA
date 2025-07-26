import React, { lazy, Suspense } from 'react';

const Page1m99xty = lazy(() => import('./Page'));

const LazyPage1m99xty = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m99xty />
  </Suspense>
);

export { LazyPage1m99xty };
