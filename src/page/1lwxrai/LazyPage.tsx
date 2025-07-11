import React, { lazy, Suspense } from 'react';

const Page1lwxrai = lazy(() => import('./Page'));

const LazyPage1lwxrai = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lwxrai />
  </Suspense>
);

export { LazyPage1lwxrai };
