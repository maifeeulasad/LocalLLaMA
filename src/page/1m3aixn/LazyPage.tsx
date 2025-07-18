import React, { lazy, Suspense } from 'react';

const Page1m3aixn = lazy(() => import('./Page'));

const LazyPage1m3aixn = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m3aixn />
  </Suspense>
);

export { LazyPage1m3aixn };
