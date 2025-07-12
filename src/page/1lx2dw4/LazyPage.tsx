import React, { lazy, Suspense } from 'react';

const Page1lx2dw4 = lazy(() => import('./Page'));

const LazyPage1lx2dw4 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lx2dw4 />
  </Suspense>
);

export { LazyPage1lx2dw4 };
