import React, { lazy, Suspense } from 'react';

const Page1mim1ug = lazy(() => import('./Page'));

const LazyPage1mim1ug = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mim1ug />
  </Suspense>
);

export { LazyPage1mim1ug };
