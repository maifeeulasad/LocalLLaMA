import React, { lazy, Suspense } from 'react';

const Page1ltdmhl = lazy(() => import('./Page'));

const LazyPage1ltdmhl = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1ltdmhl />
  </Suspense>
);

export { LazyPage1ltdmhl };
