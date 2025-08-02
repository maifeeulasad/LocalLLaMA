import React, { lazy, Suspense } from 'react';

const Page1mewg8a = lazy(() => import('./Page'));

const LazyPage1mewg8a = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mewg8a />
  </Suspense>
);

export { LazyPage1mewg8a };
