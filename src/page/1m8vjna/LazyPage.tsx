import React, { lazy, Suspense } from 'react';

const Page1m8vjna = lazy(() => import('./Page'));

const LazyPage1m8vjna = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m8vjna />
  </Suspense>
);

export { LazyPage1m8vjna };
