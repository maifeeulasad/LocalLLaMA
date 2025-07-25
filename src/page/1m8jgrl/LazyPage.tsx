import React, { lazy, Suspense } from 'react';

const Page1m8jgrl = lazy(() => import('./Page'));

const LazyPage1m8jgrl = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m8jgrl />
  </Suspense>
);

export { LazyPage1m8jgrl };
