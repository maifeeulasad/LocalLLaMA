import React, { lazy, Suspense } from 'react';

const Page1mao95d = lazy(() => import('./Page'));

const LazyPage1mao95d = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mao95d />
  </Suspense>
);

export { LazyPage1mao95d };
