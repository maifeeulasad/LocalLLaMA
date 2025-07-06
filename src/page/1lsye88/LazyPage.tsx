import React, { lazy, Suspense } from 'react';

const Page1lsye88 = lazy(() => import('./Page'));

const LazyPage1lsye88 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lsye88 />
  </Suspense>
);

export { LazyPage1lsye88 };
