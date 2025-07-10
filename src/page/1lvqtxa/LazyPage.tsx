import React, { lazy, Suspense } from 'react';

const Page1lvqtxa = lazy(() => import('./Page'));

const LazyPage1lvqtxa = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lvqtxa />
  </Suspense>
);

export { LazyPage1lvqtxa };
