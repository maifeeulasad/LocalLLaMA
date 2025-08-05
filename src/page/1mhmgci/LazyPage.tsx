import React, { lazy, Suspense } from 'react';

const Page1mhmgci = lazy(() => import('./Page'));

const LazyPage1mhmgci = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mhmgci />
  </Suspense>
);

export { LazyPage1mhmgci };
