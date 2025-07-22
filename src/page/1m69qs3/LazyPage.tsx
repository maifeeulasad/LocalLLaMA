import React, { lazy, Suspense } from 'react';

const Page1m69qs3 = lazy(() => import('./Page'));

const LazyPage1m69qs3 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m69qs3 />
  </Suspense>
);

export { LazyPage1m69qs3 };
