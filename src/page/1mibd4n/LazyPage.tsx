import React, { lazy, Suspense } from 'react';

const Page1mibd4n = lazy(() => import('./Page'));

const LazyPage1mibd4n = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mibd4n />
  </Suspense>
);

export { LazyPage1mibd4n };
