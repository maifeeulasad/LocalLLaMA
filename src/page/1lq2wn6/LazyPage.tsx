import React, { lazy, Suspense } from 'react';

const Page1lq2wn6 = lazy(() => import('./Page'));

const LazyPage1lq2wn6 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lq2wn6 />
  </Suspense>
);

export { LazyPage1lq2wn6 };
