import React, { lazy, Suspense } from 'react';

const Page1m5l0v3 = lazy(() => import('./Page'));

const LazyPage1m5l0v3 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m5l0v3 />
  </Suspense>
);

export { LazyPage1m5l0v3 };
