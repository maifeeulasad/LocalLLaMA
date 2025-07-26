import React, { lazy, Suspense } from 'react';

const Page1m96m6w = lazy(() => import('./Page'));

const LazyPage1m96m6w = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m96m6w />
  </Suspense>
);

export { LazyPage1m96m6w };
