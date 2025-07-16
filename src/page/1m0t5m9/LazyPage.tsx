import React, { lazy, Suspense } from 'react';

const Page1m0t5m9 = lazy(() => import('./Page'));

const LazyPage1m0t5m9 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m0t5m9 />
  </Suspense>
);

export { LazyPage1m0t5m9 };
