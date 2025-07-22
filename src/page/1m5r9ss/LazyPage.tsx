import React, { lazy, Suspense } from 'react';

const Page1m5r9ss = lazy(() => import('./Page'));

const LazyPage1m5r9ss = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m5r9ss />
  </Suspense>
);

export { LazyPage1m5r9ss };
