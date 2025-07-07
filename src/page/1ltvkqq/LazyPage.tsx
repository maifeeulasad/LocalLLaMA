import React, { lazy, Suspense } from 'react';

const Page1ltvkqq = lazy(() => import('./Page'));

const LazyPage1ltvkqq = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1ltvkqq />
  </Suspense>
);

export { LazyPage1ltvkqq };
