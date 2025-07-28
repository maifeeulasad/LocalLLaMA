import React, { lazy, Suspense } from 'react';

const Page1maz39j = lazy(() => import('./Page'));

const LazyPage1maz39j = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1maz39j />
  </Suspense>
);

export { LazyPage1maz39j };
