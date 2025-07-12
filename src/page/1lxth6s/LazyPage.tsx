import React, { lazy, Suspense } from 'react';

const Page1lxth6s = lazy(() => import('./Page'));

const LazyPage1lxth6s = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lxth6s />
  </Suspense>
);

export { LazyPage1lxth6s };
