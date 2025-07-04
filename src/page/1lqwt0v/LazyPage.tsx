import React, { lazy, Suspense } from 'react';

const Page1lqwt0v = lazy(() => import('./Page'));

const LazyPage1lqwt0v = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lqwt0v />
  </Suspense>
);

export { LazyPage1lqwt0v };
