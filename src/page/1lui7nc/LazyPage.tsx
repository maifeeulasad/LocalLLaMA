import React, { lazy, Suspense } from 'react';

const Page1lui7nc = lazy(() => import('./Page'));

const LazyPage1lui7nc = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lui7nc />
  </Suspense>
);

export { LazyPage1lui7nc };
