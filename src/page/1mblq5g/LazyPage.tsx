import React, { lazy, Suspense } from 'react';

const Page1mblq5g = lazy(() => import('./Page'));

const LazyPage1mblq5g = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mblq5g />
  </Suspense>
);

export { LazyPage1mblq5g };
