import React, { lazy, Suspense } from 'react';

const Page1m9rqxa = lazy(() => import('./Page'));

const LazyPage1m9rqxa = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m9rqxa />
  </Suspense>
);

export { LazyPage1m9rqxa };
