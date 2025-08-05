import React, { lazy, Suspense } from 'react';

const Page1mi23im = lazy(() => import('./Page'));

const LazyPage1mi23im = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mi23im />
  </Suspense>
);

export { LazyPage1mi23im };
