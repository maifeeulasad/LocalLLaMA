import React, { lazy, Suspense } from 'react';

const Page1mk9cg3 = lazy(() => import('./Page'));

const LazyPage1mk9cg3 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mk9cg3 />
  </Suspense>
);

export { LazyPage1mk9cg3 };
