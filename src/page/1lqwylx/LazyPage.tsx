import React, { lazy, Suspense } from 'react';

const Page1lqwylx = lazy(() => import('./Page'));

const LazyPage1lqwylx = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lqwylx />
  </Suspense>
);

export { LazyPage1lqwylx };
