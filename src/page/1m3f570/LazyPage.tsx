import React, { lazy, Suspense } from 'react';

const Page1m3f570 = lazy(() => import('./Page'));

const LazyPage1m3f570 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m3f570 />
  </Suspense>
);

export { LazyPage1m3f570 };
