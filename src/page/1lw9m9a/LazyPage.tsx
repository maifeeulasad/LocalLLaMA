import React, { lazy, Suspense } from 'react';

const Page1lw9m9a = lazy(() => import('./Page'));

const LazyPage1lw9m9a = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lw9m9a />
  </Suspense>
);

export { LazyPage1lw9m9a };
