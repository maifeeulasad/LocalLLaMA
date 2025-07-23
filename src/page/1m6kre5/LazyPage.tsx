import React, { lazy, Suspense } from 'react';

const Page1m6kre5 = lazy(() => import('./Page'));

const LazyPage1m6kre5 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m6kre5 />
  </Suspense>
);

export { LazyPage1m6kre5 };
