import React, { lazy, Suspense } from 'react';

const Page1lncymd = lazy(() => import('./Page'));

const LazyPage1lncymd = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lncymd />
  </Suspense>
);

export { LazyPage1lncymd };
