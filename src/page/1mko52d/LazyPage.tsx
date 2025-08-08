import React, { lazy, Suspense } from 'react';

const Page1mko52d = lazy(() => import('./Page'));

const LazyPage1mko52d = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mko52d />
  </Suspense>
);

export { LazyPage1mko52d };
