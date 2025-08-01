import React, { lazy, Suspense } from 'react';

const Page1men28l = lazy(() => import('./Page'));

const LazyPage1men28l = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1men28l />
  </Suspense>
);

export { LazyPage1men28l };
