import React, { lazy, Suspense } from 'react';

const Page1lneb9h = lazy(() => import('./Page'));

const LazyPage1lneb9h = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lneb9h />
  </Suspense>
);

export { LazyPage1lneb9h };
