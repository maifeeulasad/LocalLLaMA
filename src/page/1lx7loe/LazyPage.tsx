import React, { lazy, Suspense } from 'react';

const Page1lx7loe = lazy(() => import('./Page'));

const LazyPage1lx7loe = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lx7loe />
  </Suspense>
);

export { LazyPage1lx7loe };
