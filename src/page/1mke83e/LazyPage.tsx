import React, { lazy, Suspense } from 'react';

const Page1mke83e = lazy(() => import('./Page'));

const LazyPage1mke83e = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mke83e />
  </Suspense>
);

export { LazyPage1mke83e };
