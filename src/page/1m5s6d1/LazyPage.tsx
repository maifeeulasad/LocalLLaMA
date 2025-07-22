import React, { lazy, Suspense } from 'react';

const Page1m5s6d1 = lazy(() => import('./Page'));

const LazyPage1m5s6d1 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m5s6d1 />
  </Suspense>
);

export { LazyPage1m5s6d1 };
