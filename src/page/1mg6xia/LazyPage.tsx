import React, { lazy, Suspense } from 'react';

const Page1mg6xia = lazy(() => import('./Page'));

const LazyPage1mg6xia = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mg6xia />
  </Suspense>
);

export { LazyPage1mg6xia };
