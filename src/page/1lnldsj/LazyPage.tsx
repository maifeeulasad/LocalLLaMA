import React, { lazy, Suspense } from 'react';

const Page1lnldsj = lazy(() => import('./Page'));

const LazyPage1lnldsj = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lnldsj />
  </Suspense>
);

export { LazyPage1lnldsj };
