import React, { lazy, Suspense } from 'react';

const Page1ltcsbv = lazy(() => import('./Page'));

const LazyPage1ltcsbv = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1ltcsbv />
  </Suspense>
);

export { LazyPage1ltcsbv };
