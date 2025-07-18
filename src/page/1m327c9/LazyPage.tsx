import React, { lazy, Suspense } from 'react';

const Page1m327c9 = lazy(() => import('./Page'));

const LazyPage1m327c9 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m327c9 />
  </Suspense>
);

export { LazyPage1m327c9 };
