import React, { lazy, Suspense } from 'react';

const Page1m8xmy9 = lazy(() => import('./Page'));

const LazyPage1m8xmy9 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m8xmy9 />
  </Suspense>
);

export { LazyPage1m8xmy9 };
