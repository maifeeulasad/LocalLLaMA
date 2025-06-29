import React, { lazy, Suspense } from 'react';

const Page1ln4iyg = lazy(() => import('./Page'));

const LazyPage1ln4iyg = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1ln4iyg />
  </Suspense>
);

export { LazyPage1ln4iyg };
