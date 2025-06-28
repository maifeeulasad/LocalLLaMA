import React, { lazy, Suspense } from 'react';

const Page1eh9sef = lazy(() => import('./Page'));

const LazyPage1eh9sef = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1eh9sef />
  </Suspense>
);

export { LazyPage1eh9sef };
