import React, { lazy, Suspense } from 'react';

const Page1mkr8kq = lazy(() => import('./Page'));

const LazyPage1mkr8kq = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mkr8kq />
  </Suspense>
);

export { LazyPage1mkr8kq };
