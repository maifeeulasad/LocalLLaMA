import React, { lazy, Suspense } from 'react';

const Page1m62vbw = lazy(() => import('./Page'));

const LazyPage1m62vbw = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m62vbw />
  </Suspense>
);

export { LazyPage1m62vbw };
