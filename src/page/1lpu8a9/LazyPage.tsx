import React, { lazy, Suspense } from 'react';

const Page1lpu8a9 = lazy(() => import('./Page'));

const LazyPage1lpu8a9 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lpu8a9 />
  </Suspense>
);

export { LazyPage1lpu8a9 };
