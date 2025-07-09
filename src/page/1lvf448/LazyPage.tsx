import React, { lazy, Suspense } from 'react';

const Page1lvf448 = lazy(() => import('./Page'));

const LazyPage1lvf448 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lvf448 />
  </Suspense>
);

export { LazyPage1lvf448 };
