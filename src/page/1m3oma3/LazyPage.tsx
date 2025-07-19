import React, { lazy, Suspense } from 'react';

const Page1m3oma3 = lazy(() => import('./Page'));

const LazyPage1m3oma3 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m3oma3 />
  </Suspense>
);

export { LazyPage1m3oma3 };
