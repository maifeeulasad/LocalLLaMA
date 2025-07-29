import React, { lazy, Suspense } from 'react';

const Page1mblcrd = lazy(() => import('./Page'));

const LazyPage1mblcrd = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mblcrd />
  </Suspense>
);

export { LazyPage1mblcrd };
