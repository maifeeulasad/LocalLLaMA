import React, { lazy, Suspense } from 'react';

const Page1mis46w = lazy(() => import('./Page'));

const LazyPage1mis46w = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mis46w />
  </Suspense>
);

export { LazyPage1mis46w };
