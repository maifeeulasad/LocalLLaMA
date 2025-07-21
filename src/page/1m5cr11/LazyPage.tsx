import React, { lazy, Suspense } from 'react';

const Page1m5cr11 = lazy(() => import('./Page'));

const LazyPage1m5cr11 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m5cr11 />
  </Suspense>
);

export { LazyPage1m5cr11 };
