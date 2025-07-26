import React, { lazy, Suspense } from 'react';

const Page1m96b4h = lazy(() => import('./Page'));

const LazyPage1m96b4h = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m96b4h />
  </Suspense>
);

export { LazyPage1m96b4h };
