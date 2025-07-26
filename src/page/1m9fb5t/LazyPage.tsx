import React, { lazy, Suspense } from 'react';

const Page1m9fb5t = lazy(() => import('./Page'));

const LazyPage1m9fb5t = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m9fb5t />
  </Suspense>
);

export { LazyPage1m9fb5t };
