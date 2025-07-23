import React, { lazy, Suspense } from 'react';

const Page1m6u3kd = lazy(() => import('./Page'));

const LazyPage1m6u3kd = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m6u3kd />
  </Suspense>
);

export { LazyPage1m6u3kd };
