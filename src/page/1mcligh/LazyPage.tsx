import React, { lazy, Suspense } from 'react';

const Page1mcligh = lazy(() => import('./Page'));

const LazyPage1mcligh = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mcligh />
  </Suspense>
);

export { LazyPage1mcligh };
