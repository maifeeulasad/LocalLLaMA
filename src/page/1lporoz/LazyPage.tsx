import React, { lazy, Suspense } from 'react';

const Page1lporoz = lazy(() => import('./Page'));

const LazyPage1lporoz = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lporoz />
  </Suspense>
);

export { LazyPage1lporoz };
