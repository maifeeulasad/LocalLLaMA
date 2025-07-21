import React, { lazy, Suspense } from 'react';

const Page1m4ta0f = lazy(() => import('./Page'));

const LazyPage1m4ta0f = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m4ta0f />
  </Suspense>
);

export { LazyPage1m4ta0f };
