import React, { lazy, Suspense } from 'react';

const Page1mec14w = lazy(() => import('./Page'));

const LazyPage1mec14w = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mec14w />
  </Suspense>
);

export { LazyPage1mec14w };
