import React, { lazy, Suspense } from 'react';

const Page1lnacbb = lazy(() => import('./Page'));

const LazyPage1lnacbb = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lnacbb />
  </Suspense>
);

export { LazyPage1lnacbb };
