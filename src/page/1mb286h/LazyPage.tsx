import React, { lazy, Suspense } from 'react';

const Page1mb286h = lazy(() => import('./Page'));

const LazyPage1mb286h = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mb286h />
  </Suspense>
);

export { LazyPage1mb286h };
