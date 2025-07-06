import React, { lazy, Suspense } from 'react';

const Page1lrq99t = lazy(() => import('./Page'));

const LazyPage1lrq99t = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lrq99t />
  </Suspense>
);

export { LazyPage1lrq99t };
