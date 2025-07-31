import React, { lazy, Suspense } from 'react';

const Page1mdk46y = lazy(() => import('./Page'));

const LazyPage1mdk46y = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mdk46y />
  </Suspense>
);

export { LazyPage1mdk46y };
