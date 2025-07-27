import React, { lazy, Suspense } from 'react';

const Page1ma6b7j = lazy(() => import('./Page'));

const LazyPage1ma6b7j = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1ma6b7j />
  </Suspense>
);

export { LazyPage1ma6b7j };
