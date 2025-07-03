import React, { lazy, Suspense } from 'react';

const Page1lqnczx = lazy(() => import('./Page'));

const LazyPage1lqnczx = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lqnczx />
  </Suspense>
);

export { LazyPage1lqnczx };
