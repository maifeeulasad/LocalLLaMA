import React, { lazy, Suspense } from 'react';

const Page1lqycp0 = lazy(() => import('./Page'));

const LazyPage1lqycp0 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lqycp0 />
  </Suspense>
);

export { LazyPage1lqycp0 };
