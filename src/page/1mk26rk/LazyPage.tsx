import React, { lazy, Suspense } from 'react';

const Page1mk26rk = lazy(() => import('./Page'));

const LazyPage1mk26rk = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mk26rk />
  </Suspense>
);

export { LazyPage1mk26rk };
