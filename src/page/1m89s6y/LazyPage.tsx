import React, { lazy, Suspense } from 'react';

const Page1m89s6y = lazy(() => import('./Page'));

const LazyPage1m89s6y = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m89s6y />
  </Suspense>
);

export { LazyPage1m89s6y };
