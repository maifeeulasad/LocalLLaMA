import React, { lazy, Suspense } from 'react';

const Page1lnlxp1 = lazy(() => import('./Page'));

const LazyPage1lnlxp1 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lnlxp1 />
  </Suspense>
);

export { LazyPage1lnlxp1 };
