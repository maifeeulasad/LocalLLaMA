import React, { lazy, Suspense } from 'react';

const Page1mbap20 = lazy(() => import('./Page'));

const LazyPage1mbap20 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mbap20 />
  </Suspense>
);

export { LazyPage1mbap20 };
