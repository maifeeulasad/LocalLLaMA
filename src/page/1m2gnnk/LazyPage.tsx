import React, { lazy, Suspense } from 'react';

const Page1m2gnnk = lazy(() => import('./Page'));

const LazyPage1m2gnnk = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m2gnnk />
  </Suspense>
);

export { LazyPage1m2gnnk };
