import React, { lazy, Suspense } from 'react';

const Page1lx94ht = lazy(() => import('./Page'));

const LazyPage1lx94ht = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lx94ht />
  </Suspense>
);

export { LazyPage1lx94ht };
