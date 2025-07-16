import React, { lazy, Suspense } from 'react';

const Page1m0vc09 = lazy(() => import('./Page'));

const LazyPage1m0vc09 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m0vc09 />
  </Suspense>
);

export { LazyPage1m0vc09 };
