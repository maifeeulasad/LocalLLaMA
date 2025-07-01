import React, { lazy, Suspense } from 'react';

const Page1lobyx5 = lazy(() => import('./Page'));

const LazyPage1lobyx5 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lobyx5 />
  </Suspense>
);

export { LazyPage1lobyx5 };
