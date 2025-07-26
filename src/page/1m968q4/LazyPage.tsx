import React, { lazy, Suspense } from 'react';

const Page1m968q4 = lazy(() => import('./Page'));

const LazyPage1m968q4 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m968q4 />
  </Suspense>
);

export { LazyPage1m968q4 };
