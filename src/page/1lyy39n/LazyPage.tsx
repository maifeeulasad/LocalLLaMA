import React, { lazy, Suspense } from 'react';

const Page1lyy39n = lazy(() => import('./Page'));

const LazyPage1lyy39n = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lyy39n />
  </Suspense>
);

export { LazyPage1lyy39n };
