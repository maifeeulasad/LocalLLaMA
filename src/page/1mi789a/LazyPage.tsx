import React, { lazy, Suspense } from 'react';

const Page1mi789a = lazy(() => import('./Page'));

const LazyPage1mi789a = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mi789a />
  </Suspense>
);

export { LazyPage1mi789a };
