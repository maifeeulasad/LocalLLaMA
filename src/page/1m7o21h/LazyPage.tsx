import React, { lazy, Suspense } from 'react';

const Page1m7o21h = lazy(() => import('./Page'));

const LazyPage1m7o21h = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m7o21h />
  </Suspense>
);

export { LazyPage1m7o21h };
