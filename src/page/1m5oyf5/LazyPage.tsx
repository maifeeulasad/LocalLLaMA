import React, { lazy, Suspense } from 'react';

const Page1m5oyf5 = lazy(() => import('./Page'));

const LazyPage1m5oyf5 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m5oyf5 />
  </Suspense>
);

export { LazyPage1m5oyf5 };
