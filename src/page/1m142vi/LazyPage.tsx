import React, { lazy, Suspense } from 'react';

const Page1m142vi = lazy(() => import('./Page'));

const LazyPage1m142vi = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m142vi />
  </Suspense>
);

export { LazyPage1m142vi };
