import React, { lazy, Suspense } from 'react';

const Page1lw6u69 = lazy(() => import('./Page'));

const LazyPage1lw6u69 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lw6u69 />
  </Suspense>
);

export { LazyPage1lw6u69 };
