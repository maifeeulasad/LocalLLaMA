import React, { lazy, Suspense } from 'react';

const Page1lq1sdi = lazy(() => import('./Page'));

const LazyPage1lq1sdi = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lq1sdi />
  </Suspense>
);

export { LazyPage1lq1sdi };
