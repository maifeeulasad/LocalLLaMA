import React, { lazy, Suspense } from 'react';

const Page1m5lg47 = lazy(() => import('./Page'));

const LazyPage1m5lg47 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m5lg47 />
  </Suspense>
);

export { LazyPage1m5lg47 };
