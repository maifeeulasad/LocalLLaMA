import React, { lazy, Suspense } from 'react';

const Page1m2g9x8 = lazy(() => import('./Page'));

const LazyPage1m2g9x8 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m2g9x8 />
  </Suspense>
);

export { LazyPage1m2g9x8 };
