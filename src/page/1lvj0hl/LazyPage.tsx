import React, { lazy, Suspense } from 'react';

const Page1lvj0hl = lazy(() => import('./Page'));

const LazyPage1lvj0hl = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lvj0hl />
  </Suspense>
);

export { LazyPage1lvj0hl };
