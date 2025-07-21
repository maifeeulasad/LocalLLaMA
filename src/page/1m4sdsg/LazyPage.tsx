import React, { lazy, Suspense } from 'react';

const Page1m4sdsg = lazy(() => import('./Page'));

const LazyPage1m4sdsg = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m4sdsg />
  </Suspense>
);

export { LazyPage1m4sdsg };
