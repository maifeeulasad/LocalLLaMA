import React, { lazy, Suspense } from 'react';

const Page1m5uu0t = lazy(() => import('./Page'));

const LazyPage1m5uu0t = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m5uu0t />
  </Suspense>
);

export { LazyPage1m5uu0t };
