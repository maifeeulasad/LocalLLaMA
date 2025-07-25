import React, { lazy, Suspense } from 'react';

const Page1m8jrzg = lazy(() => import('./Page'));

const LazyPage1m8jrzg = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m8jrzg />
  </Suspense>
);

export { LazyPage1m8jrzg };
