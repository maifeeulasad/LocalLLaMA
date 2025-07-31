import React, { lazy, Suspense } from 'react';

const Page1mdk516 = lazy(() => import('./Page'));

const LazyPage1mdk516 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mdk516 />
  </Suspense>
);

export { LazyPage1mdk516 };
