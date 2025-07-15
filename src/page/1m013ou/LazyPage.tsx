import React, { lazy, Suspense } from 'react';

const Page1m013ou = lazy(() => import('./Page'));

const LazyPage1m013ou = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m013ou />
  </Suspense>
);

export { LazyPage1m013ou };
