import React, { lazy, Suspense } from 'react';

const Page1lpmx00 = lazy(() => import('./Page'));

const LazyPage1lpmx00 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lpmx00 />
  </Suspense>
);

export { LazyPage1lpmx00 };
