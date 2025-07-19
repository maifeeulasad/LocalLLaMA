import React, { lazy, Suspense } from 'react';

const Page1m3s01i = lazy(() => import('./Page'));

const LazyPage1m3s01i = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m3s01i />
  </Suspense>
);

export { LazyPage1m3s01i };
