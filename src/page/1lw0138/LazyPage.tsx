import React, { lazy, Suspense } from 'react';

const Page1lw0138 = lazy(() => import('./Page'));

const LazyPage1lw0138 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lw0138 />
  </Suspense>
);

export { LazyPage1lw0138 };
