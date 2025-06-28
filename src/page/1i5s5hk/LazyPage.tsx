import React, { lazy, Suspense } from 'react';

const Page1i5s5hk = lazy(() => import('./Page'));

const LazyPage1i5s5hk = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1i5s5hk />
  </Suspense>
);

export { LazyPage1i5s5hk };
