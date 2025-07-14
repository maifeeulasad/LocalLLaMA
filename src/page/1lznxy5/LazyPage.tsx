import React, { lazy, Suspense } from 'react';

const Page1lznxy5 = lazy(() => import('./Page'));

const LazyPage1lznxy5 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lznxy5 />
  </Suspense>
);

export { LazyPage1lznxy5 };
