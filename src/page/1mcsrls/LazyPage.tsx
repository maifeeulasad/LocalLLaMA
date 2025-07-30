import React, { lazy, Suspense } from 'react';

const Page1mcsrls = lazy(() => import('./Page'));

const LazyPage1mcsrls = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mcsrls />
  </Suspense>
);

export { LazyPage1mcsrls };
