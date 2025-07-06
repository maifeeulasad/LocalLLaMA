import React, { lazy, Suspense } from 'react';

const Page1lroopr = lazy(() => import('./Page'));

const LazyPage1lroopr = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lroopr />
  </Suspense>
);

export { LazyPage1lroopr };
