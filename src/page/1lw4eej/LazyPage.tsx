import React, { lazy, Suspense } from 'react';

const Page1lw4eej = lazy(() => import('./Page'));

const LazyPage1lw4eej = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lw4eej />
  </Suspense>
);

export { LazyPage1lw4eej };
