import React, { lazy, Suspense } from 'react';

const Page1lusfyg = lazy(() => import('./Page'));

const LazyPage1lusfyg = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lusfyg />
  </Suspense>
);

export { LazyPage1lusfyg };
