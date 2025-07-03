import React, { lazy, Suspense } from 'react';

const Page1lqi863 = lazy(() => import('./Page'));

const LazyPage1lqi863 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lqi863 />
  </Suspense>
);

export { LazyPage1lqi863 };
