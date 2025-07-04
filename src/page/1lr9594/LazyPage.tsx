import React, { lazy, Suspense } from 'react';

const Page1lr9594 = lazy(() => import('./Page'));

const LazyPage1lr9594 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lr9594 />
  </Suspense>
);

export { LazyPage1lr9594 };
