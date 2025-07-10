import React, { lazy, Suspense } from 'react';

const Page1lw9ch2 = lazy(() => import('./Page'));

const LazyPage1lw9ch2 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lw9ch2 />
  </Suspense>
);

export { LazyPage1lw9ch2 };
