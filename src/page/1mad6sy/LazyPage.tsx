import React, { lazy, Suspense } from 'react';

const Page1mad6sy = lazy(() => import('./Page'));

const LazyPage1mad6sy = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mad6sy />
  </Suspense>
);

export { LazyPage1mad6sy };
