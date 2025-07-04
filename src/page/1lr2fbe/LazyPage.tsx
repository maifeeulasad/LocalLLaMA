import React, { lazy, Suspense } from 'react';

const Page1lr2fbe = lazy(() => import('./Page'));

const LazyPage1lr2fbe = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lr2fbe />
  </Suspense>
);

export { LazyPage1lr2fbe };
