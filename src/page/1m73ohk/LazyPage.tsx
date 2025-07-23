import React, { lazy, Suspense } from 'react';

const Page1m73ohk = lazy(() => import('./Page'));

const LazyPage1m73ohk = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m73ohk />
  </Suspense>
);

export { LazyPage1m73ohk };
