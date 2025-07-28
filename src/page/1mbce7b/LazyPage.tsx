import React, { lazy, Suspense } from 'react';

const Page1mbce7b = lazy(() => import('./Page'));

const LazyPage1mbce7b = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mbce7b />
  </Suspense>
);

export { LazyPage1mbce7b };
