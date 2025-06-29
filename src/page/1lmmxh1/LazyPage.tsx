import React, { lazy, Suspense } from 'react';

const Page1lmmxh1 = lazy(() => import('./Page'));

const LazyPage1lmmxh1 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lmmxh1 />
  </Suspense>
);

export { LazyPage1lmmxh1 };
