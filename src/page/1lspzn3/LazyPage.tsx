import React, { lazy, Suspense } from 'react';

const Page1lspzn3 = lazy(() => import('./Page'));

const LazyPage1lspzn3 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lspzn3 />
  </Suspense>
);

export { LazyPage1lspzn3 };
