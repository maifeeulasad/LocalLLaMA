import React, { lazy, Suspense } from 'react';

const Page1mgr02b = lazy(() => import('./Page'));

const LazyPage1mgr02b = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mgr02b />
  </Suspense>
);

export { LazyPage1mgr02b };
