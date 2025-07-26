import React, { lazy, Suspense } from 'react';

const Page1m9p7bb = lazy(() => import('./Page'));

const LazyPage1m9p7bb = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m9p7bb />
  </Suspense>
);

export { LazyPage1m9p7bb };
