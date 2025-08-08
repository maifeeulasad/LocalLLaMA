import React, { lazy, Suspense } from 'react';

const Page1mk77bk = lazy(() => import('./Page'));

const LazyPage1mk77bk = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mk77bk />
  </Suspense>
);

export { LazyPage1mk77bk };
