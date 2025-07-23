import React, { lazy, Suspense } from 'react';

const Page1m6tbhm = lazy(() => import('./Page'));

const LazyPage1m6tbhm = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m6tbhm />
  </Suspense>
);

export { LazyPage1m6tbhm };
