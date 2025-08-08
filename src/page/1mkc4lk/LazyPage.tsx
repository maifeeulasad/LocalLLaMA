import React, { lazy, Suspense } from 'react';

const Page1mkc4lk = lazy(() => import('./Page'));

const LazyPage1mkc4lk = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mkc4lk />
  </Suspense>
);

export { LazyPage1mkc4lk };
