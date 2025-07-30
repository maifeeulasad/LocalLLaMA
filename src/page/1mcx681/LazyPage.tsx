import React, { lazy, Suspense } from 'react';

const Page1mcx681 = lazy(() => import('./Page'));

const LazyPage1mcx681 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mcx681 />
  </Suspense>
);

export { LazyPage1mcx681 };
