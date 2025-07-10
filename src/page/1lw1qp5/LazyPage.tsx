import React, { lazy, Suspense } from 'react';

const Page1lw1qp5 = lazy(() => import('./Page'));

const LazyPage1lw1qp5 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lw1qp5 />
  </Suspense>
);

export { LazyPage1lw1qp5 };
