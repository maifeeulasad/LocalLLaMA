import React, { lazy, Suspense } from 'react';

const Page1m68yvl = lazy(() => import('./Page'));

const LazyPage1m68yvl = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m68yvl />
  </Suspense>
);

export { LazyPage1m68yvl };
