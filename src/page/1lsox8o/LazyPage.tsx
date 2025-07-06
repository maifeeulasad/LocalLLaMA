import React, { lazy, Suspense } from 'react';

const Page1lsox8o = lazy(() => import('./Page'));

const LazyPage1lsox8o = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lsox8o />
  </Suspense>
);

export { LazyPage1lsox8o };
