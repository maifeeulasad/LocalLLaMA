import React, { lazy, Suspense } from 'react';

const Page1m7zwsd = lazy(() => import('./Page'));

const LazyPage1m7zwsd = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m7zwsd />
  </Suspense>
);

export { LazyPage1m7zwsd };
