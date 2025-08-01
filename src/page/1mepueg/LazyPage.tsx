import React, { lazy, Suspense } from 'react';

const Page1mepueg = lazy(() => import('./Page'));

const LazyPage1mepueg = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mepueg />
  </Suspense>
);

export { LazyPage1mepueg };
