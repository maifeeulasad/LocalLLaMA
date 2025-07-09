import React, { lazy, Suspense } from 'react';

const Page1luytx2 = lazy(() => import('./Page'));

const LazyPage1luytx2 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1luytx2 />
  </Suspense>
);

export { LazyPage1luytx2 };
