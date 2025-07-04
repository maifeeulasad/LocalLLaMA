import React, { lazy, Suspense } from 'react';

const Page1lr0cqn = lazy(() => import('./Page'));

const LazyPage1lr0cqn = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lr0cqn />
  </Suspense>
);

export { LazyPage1lr0cqn };
