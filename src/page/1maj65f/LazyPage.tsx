import React, { lazy, Suspense } from 'react';

const Page1maj65f = lazy(() => import('./Page'));

const LazyPage1maj65f = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1maj65f />
  </Suspense>
);

export { LazyPage1maj65f };
