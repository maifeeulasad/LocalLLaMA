import React, { lazy, Suspense } from 'react';

const Page1loj134 = lazy(() => import('./Page'));

const LazyPage1loj134 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1loj134 />
  </Suspense>
);

export { LazyPage1loj134 };
