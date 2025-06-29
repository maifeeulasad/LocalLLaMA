import React, { lazy, Suspense } from 'react';

const Page1lmxhd7 = lazy(() => import('./Page'));

const LazyPage1lmxhd7 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lmxhd7 />
  </Suspense>
);

export { LazyPage1lmxhd7 };
