import React, { lazy, Suspense } from 'react';

const Page1mg4lxw = lazy(() => import('./Page'));

const LazyPage1mg4lxw = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mg4lxw />
  </Suspense>
);

export { LazyPage1mg4lxw };
