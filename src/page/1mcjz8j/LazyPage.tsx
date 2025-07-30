import React, { lazy, Suspense } from 'react';

const Page1mcjz8j = lazy(() => import('./Page'));

const LazyPage1mcjz8j = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mcjz8j />
  </Suspense>
);

export { LazyPage1mcjz8j };
