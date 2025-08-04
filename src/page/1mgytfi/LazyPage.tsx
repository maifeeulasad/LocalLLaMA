import React, { lazy, Suspense } from 'react';

const Page1mgytfi = lazy(() => import('./Page'));

const LazyPage1mgytfi = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mgytfi />
  </Suspense>
);

export { LazyPage1mgytfi };
