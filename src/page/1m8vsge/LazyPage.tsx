import React, { lazy, Suspense } from 'react';

const Page1m8vsge = lazy(() => import('./Page'));

const LazyPage1m8vsge = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m8vsge />
  </Suspense>
);

export { LazyPage1m8vsge };
