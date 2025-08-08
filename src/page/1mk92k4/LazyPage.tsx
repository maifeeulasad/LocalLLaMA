import React, { lazy, Suspense } from 'react';

const Page1mk92k4 = lazy(() => import('./Page'));

const LazyPage1mk92k4 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mk92k4 />
  </Suspense>
);

export { LazyPage1mk92k4 };
