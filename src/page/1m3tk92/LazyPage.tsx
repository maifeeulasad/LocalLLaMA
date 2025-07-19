import React, { lazy, Suspense } from 'react';

const Page1m3tk92 = lazy(() => import('./Page'));

const LazyPage1m3tk92 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m3tk92 />
  </Suspense>
);

export { LazyPage1m3tk92 };
