import React, { lazy, Suspense } from 'react';

const Page1m5v7if = lazy(() => import('./Page'));

const LazyPage1m5v7if = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m5v7if />
  </Suspense>
);

export { LazyPage1m5v7if };
