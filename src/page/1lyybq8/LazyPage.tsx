import React, { lazy, Suspense } from 'react';

const Page1lyybq8 = lazy(() => import('./Page'));

const LazyPage1lyybq8 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lyybq8 />
  </Suspense>
);

export { LazyPage1lyybq8 };
