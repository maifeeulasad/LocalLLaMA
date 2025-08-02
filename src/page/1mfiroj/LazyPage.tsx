import React, { lazy, Suspense } from 'react';

const Page1mfiroj = lazy(() => import('./Page'));

const LazyPage1mfiroj = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mfiroj />
  </Suspense>
);

export { LazyPage1mfiroj };
