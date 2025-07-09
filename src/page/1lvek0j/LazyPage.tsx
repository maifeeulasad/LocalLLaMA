import React, { lazy, Suspense } from 'react';

const Page1lvek0j = lazy(() => import('./Page'));

const LazyPage1lvek0j = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lvek0j />
  </Suspense>
);

export { LazyPage1lvek0j };
