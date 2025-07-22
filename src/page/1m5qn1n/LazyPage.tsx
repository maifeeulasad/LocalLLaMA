import React, { lazy, Suspense } from 'react';

const Page1m5qn1n = lazy(() => import('./Page'));

const LazyPage1m5qn1n = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m5qn1n />
  </Suspense>
);

export { LazyPage1m5qn1n };
