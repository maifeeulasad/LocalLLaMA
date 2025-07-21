import React, { lazy, Suspense } from 'react';

const Page1m5hksu = lazy(() => import('./Page'));

const LazyPage1m5hksu = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m5hksu />
  </Suspense>
);

export { LazyPage1m5hksu };
