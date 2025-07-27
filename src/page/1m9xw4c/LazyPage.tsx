import React, { lazy, Suspense } from 'react';

const Page1m9xw4c = lazy(() => import('./Page'));

const LazyPage1m9xw4c = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m9xw4c />
  </Suspense>
);

export { LazyPage1m9xw4c };
