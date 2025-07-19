import React, { lazy, Suspense } from 'react';

const Page1m3is87 = lazy(() => import('./Page'));

const LazyPage1m3is87 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m3is87 />
  </Suspense>
);

export { LazyPage1m3is87 };
