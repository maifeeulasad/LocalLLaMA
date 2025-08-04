import React, { lazy, Suspense } from 'react';

const Page1mgv53t = lazy(() => import('./Page'));

const LazyPage1mgv53t = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mgv53t />
  </Suspense>
);

export { LazyPage1mgv53t };
