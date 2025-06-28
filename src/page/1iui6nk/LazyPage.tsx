import React, { lazy, Suspense } from 'react';

const Page1iui6nk = lazy(() => import('./Page'));

const LazyPage1iui6nk = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1iui6nk />
  </Suspense>
);

export { LazyPage1iui6nk };
