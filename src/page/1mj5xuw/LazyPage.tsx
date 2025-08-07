import React, { lazy, Suspense } from 'react';

const Page1mj5xuw = lazy(() => import('./Page'));

const LazyPage1mj5xuw = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mj5xuw />
  </Suspense>
);

export { LazyPage1mj5xuw };
