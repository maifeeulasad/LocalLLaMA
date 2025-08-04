import React, { lazy, Suspense } from 'react';

const Page1mgr13d = lazy(() => import('./Page'));

const LazyPage1mgr13d = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mgr13d />
  </Suspense>
);

export { LazyPage1mgr13d };
