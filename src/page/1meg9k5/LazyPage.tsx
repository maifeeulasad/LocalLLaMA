import React, { lazy, Suspense } from 'react';

const Page1meg9k5 = lazy(() => import('./Page'));

const LazyPage1meg9k5 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1meg9k5 />
  </Suspense>
);

export { LazyPage1meg9k5 };
