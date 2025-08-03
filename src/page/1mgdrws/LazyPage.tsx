import React, { lazy, Suspense } from 'react';

const Page1mgdrws = lazy(() => import('./Page'));

const LazyPage1mgdrws = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mgdrws />
  </Suspense>
);

export { LazyPage1mgdrws };
