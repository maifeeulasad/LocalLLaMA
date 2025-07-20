import React, { lazy, Suspense } from 'react';

const Page1m48ffs = lazy(() => import('./Page'));

const LazyPage1m48ffs = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m48ffs />
  </Suspense>
);

export { LazyPage1m48ffs };
