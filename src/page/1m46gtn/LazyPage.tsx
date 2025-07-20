import React, { lazy, Suspense } from 'react';

const Page1m46gtn = lazy(() => import('./Page'));

const LazyPage1m46gtn = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m46gtn />
  </Suspense>
);

export { LazyPage1m46gtn };
