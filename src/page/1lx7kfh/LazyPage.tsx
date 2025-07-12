import React, { lazy, Suspense } from 'react';

const Page1lx7kfh = lazy(() => import('./Page'));

const LazyPage1lx7kfh = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lx7kfh />
  </Suspense>
);

export { LazyPage1lx7kfh };
