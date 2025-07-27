import React, { lazy, Suspense } from 'react';

const Page1ma3hmd = lazy(() => import('./Page'));

const LazyPage1ma3hmd = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1ma3hmd />
  </Suspense>
);

export { LazyPage1ma3hmd };
