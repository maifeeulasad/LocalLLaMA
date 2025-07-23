import React, { lazy, Suspense } from 'react';

const Page1m6mew9 = lazy(() => import('./Page'));

const LazyPage1m6mew9 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m6mew9 />
  </Suspense>
);

export { LazyPage1m6mew9 };
