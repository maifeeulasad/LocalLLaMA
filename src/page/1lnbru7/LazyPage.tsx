import React, { lazy, Suspense } from 'react';

const Page1lnbru7 = lazy(() => import('./Page'));

const LazyPage1lnbru7 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lnbru7 />
  </Suspense>
);

export { LazyPage1lnbru7 };
