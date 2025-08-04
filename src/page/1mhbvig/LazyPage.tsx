import React, { lazy, Suspense } from 'react';

const Page1mhbvig = lazy(() => import('./Page'));

const LazyPage1mhbvig = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mhbvig />
  </Suspense>
);

export { LazyPage1mhbvig };
