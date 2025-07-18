import React, { lazy, Suspense } from 'react';

const Page1m386sc = lazy(() => import('./Page'));

const LazyPage1m386sc = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m386sc />
  </Suspense>
);

export { LazyPage1m386sc };
