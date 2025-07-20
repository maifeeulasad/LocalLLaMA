import React, { lazy, Suspense } from 'react';

const Page1m4cil7 = lazy(() => import('./Page'));

const LazyPage1m4cil7 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m4cil7 />
  </Suspense>
);

export { LazyPage1m4cil7 };
