import React, { lazy, Suspense } from 'react';

const Page1lyonb4 = lazy(() => import('./Page'));

const LazyPage1lyonb4 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lyonb4 />
  </Suspense>
);

export { LazyPage1lyonb4 };
