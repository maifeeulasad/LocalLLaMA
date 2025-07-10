import React, { lazy, Suspense } from 'react';

const Page1lw3cqn = lazy(() => import('./Page'));

const LazyPage1lw3cqn = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lw3cqn />
  </Suspense>
);

export { LazyPage1lw3cqn };
