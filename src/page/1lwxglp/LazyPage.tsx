import React, { lazy, Suspense } from 'react';

const Page1lwxglp = lazy(() => import('./Page'));

const LazyPage1lwxglp = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lwxglp />
  </Suspense>
);

export { LazyPage1lwxglp };
