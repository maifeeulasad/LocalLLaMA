import React, { lazy, Suspense } from 'react';

const Page1mgv384 = lazy(() => import('./Page'));

const LazyPage1mgv384 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mgv384 />
  </Suspense>
);

export { LazyPage1mgv384 };
