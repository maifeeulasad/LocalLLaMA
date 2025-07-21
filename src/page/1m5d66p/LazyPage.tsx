import React, { lazy, Suspense } from 'react';

const Page1m5d66p = lazy(() => import('./Page'));

const LazyPage1m5d66p = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m5d66p />
  </Suspense>
);

export { LazyPage1m5d66p };
