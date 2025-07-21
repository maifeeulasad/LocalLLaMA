import React, { lazy, Suspense } from 'react';

const Page1m5h2td = lazy(() => import('./Page'));

const LazyPage1m5h2td = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m5h2td />
  </Suspense>
);

export { LazyPage1m5h2td };
