import React, { lazy, Suspense } from 'react';

const Page1ipfv03 = lazy(() => import('./Page'));

const LazyPage1ipfv03 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1ipfv03 />
  </Suspense>
);

export { LazyPage1ipfv03 };
