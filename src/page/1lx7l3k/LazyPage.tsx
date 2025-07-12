import React, { lazy, Suspense } from 'react';

const Page1lx7l3k = lazy(() => import('./Page'));

const LazyPage1lx7l3k = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lx7l3k />
  </Suspense>
);

export { LazyPage1lx7l3k };
