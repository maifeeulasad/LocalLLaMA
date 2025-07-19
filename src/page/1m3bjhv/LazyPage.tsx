import React, { lazy, Suspense } from 'react';

const Page1m3bjhv = lazy(() => import('./Page'));

const LazyPage1m3bjhv = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m3bjhv />
  </Suspense>
);

export { LazyPage1m3bjhv };
