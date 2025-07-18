import React, { lazy, Suspense } from 'react';

const Page1m39xy5 = lazy(() => import('./Page'));

const LazyPage1m39xy5 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m39xy5 />
  </Suspense>
);

export { LazyPage1m39xy5 };
