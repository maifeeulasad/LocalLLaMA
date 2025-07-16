import React, { lazy, Suspense } from 'react';

const Page1m19upn = lazy(() => import('./Page'));

const LazyPage1m19upn = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m19upn />
  </Suspense>
);

export { LazyPage1m19upn };
