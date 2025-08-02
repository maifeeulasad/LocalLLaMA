import React, { lazy, Suspense } from 'react';

const Page1mf0fgj = lazy(() => import('./Page'));

const LazyPage1mf0fgj = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mf0fgj />
  </Suspense>
);

export { LazyPage1mf0fgj };
