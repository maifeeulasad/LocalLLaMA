import React, { lazy, Suspense } from 'react';

const Page1mi1bic = lazy(() => import('./Page'));

const LazyPage1mi1bic = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mi1bic />
  </Suspense>
);

export { LazyPage1mi1bic };
