import React, { lazy, Suspense } from 'react';

const Page1lw5v9y = lazy(() => import('./Page'));

const LazyPage1lw5v9y = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lw5v9y />
  </Suspense>
);

export { LazyPage1lw5v9y };
