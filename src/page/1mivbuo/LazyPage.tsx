import React, { lazy, Suspense } from 'react';

const Page1mivbuo = lazy(() => import('./Page'));

const LazyPage1mivbuo = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mivbuo />
  </Suspense>
);

export { LazyPage1mivbuo };
