import React, { lazy, Suspense } from 'react';

const Page1ibbloy = lazy(() => import('./Page'));

const LazyPage1ibbloy = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1ibbloy />
  </Suspense>
);

export { LazyPage1ibbloy };
