import React, { lazy, Suspense } from 'react';

const Page1m9r5gb = lazy(() => import('./Page'));

const LazyPage1m9r5gb = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m9r5gb />
  </Suspense>
);

export { LazyPage1m9r5gb };
