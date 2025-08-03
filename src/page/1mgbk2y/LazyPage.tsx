import React, { lazy, Suspense } from 'react';

const Page1mgbk2y = lazy(() => import('./Page'));

const LazyPage1mgbk2y = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mgbk2y />
  </Suspense>
);

export { LazyPage1mgbk2y };
