import React, { lazy, Suspense } from 'react';

const Page1mk7r1g = lazy(() => import('./Page'));

const LazyPage1mk7r1g = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mk7r1g />
  </Suspense>
);

export { LazyPage1mk7r1g };
