import React, { lazy, Suspense } from 'react';

const Page1mecvig = lazy(() => import('./Page'));

const LazyPage1mecvig = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mecvig />
  </Suspense>
);

export { LazyPage1mecvig };
