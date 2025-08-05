import React, { lazy, Suspense } from 'react';

const Page1mi2ebo = lazy(() => import('./Page'));

const LazyPage1mi2ebo = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mi2ebo />
  </Suspense>
);

export { LazyPage1mi2ebo };
