import React, { lazy, Suspense } from 'react';

const Page1ma8iez = lazy(() => import('./Page'));

const LazyPage1ma8iez = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1ma8iez />
  </Suspense>
);

export { LazyPage1ma8iez };
