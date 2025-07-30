import React, { lazy, Suspense } from 'react';

const Page1md1m8u = lazy(() => import('./Page'));

const LazyPage1md1m8u = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1md1m8u />
  </Suspense>
);

export { LazyPage1md1m8u };
