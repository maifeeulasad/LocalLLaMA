import React, { lazy, Suspense } from 'react';

const Page1m58qf3 = lazy(() => import('./Page'));

const LazyPage1m58qf3 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m58qf3 />
  </Suspense>
);

export { LazyPage1m58qf3 };
