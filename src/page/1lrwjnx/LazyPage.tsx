import React, { lazy, Suspense } from 'react';

const Page1lrwjnx = lazy(() => import('./Page'));

const LazyPage1lrwjnx = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lrwjnx />
  </Suspense>
);

export { LazyPage1lrwjnx };
