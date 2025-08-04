import React, { lazy, Suspense } from 'react';

const Page1mgytca = lazy(() => import('./Page'));

const LazyPage1mgytca = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mgytca />
  </Suspense>
);

export { LazyPage1mgytca };
