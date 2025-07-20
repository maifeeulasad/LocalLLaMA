import React, { lazy, Suspense } from 'react';

const Page1m4lwcu = lazy(() => import('./Page'));

const LazyPage1m4lwcu = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m4lwcu />
  </Suspense>
);

export { LazyPage1m4lwcu };
