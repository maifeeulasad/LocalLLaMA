import React, { lazy, Suspense } from 'react';

const Page1lomke8 = lazy(() => import('./Page'));

const LazyPage1lomke8 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lomke8 />
  </Suspense>
);

export { LazyPage1lomke8 };
