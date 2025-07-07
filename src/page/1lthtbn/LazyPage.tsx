import React, { lazy, Suspense } from 'react';

const Page1lthtbn = lazy(() => import('./Page'));

const LazyPage1lthtbn = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lthtbn />
  </Suspense>
);

export { LazyPage1lthtbn };
