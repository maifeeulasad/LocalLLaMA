import React, { lazy, Suspense } from 'react';

const Page1lw6jz5 = lazy(() => import('./Page'));

const LazyPage1lw6jz5 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lw6jz5 />
  </Suspense>
);

export { LazyPage1lw6jz5 };
