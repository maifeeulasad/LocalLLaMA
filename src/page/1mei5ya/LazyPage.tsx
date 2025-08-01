import React, { lazy, Suspense } from 'react';

const Page1mei5ya = lazy(() => import('./Page'));

const LazyPage1mei5ya = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mei5ya />
  </Suspense>
);

export { LazyPage1mei5ya };
