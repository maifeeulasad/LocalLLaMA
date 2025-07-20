import React, { lazy, Suspense } from 'react';

const Page1m45sh1 = lazy(() => import('./Page'));

const LazyPage1m45sh1 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m45sh1 />
  </Suspense>
);

export { LazyPage1m45sh1 };
