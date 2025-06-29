import React, { lazy, Suspense } from 'react';

const Page1lnh84u = lazy(() => import('./Page'));

const LazyPage1lnh84u = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lnh84u />
  </Suspense>
);

export { LazyPage1lnh84u };
