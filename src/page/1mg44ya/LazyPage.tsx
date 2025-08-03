import React, { lazy, Suspense } from 'react';

const Page1mg44ya = lazy(() => import('./Page'));

const LazyPage1mg44ya = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mg44ya />
  </Suspense>
);

export { LazyPage1mg44ya };
