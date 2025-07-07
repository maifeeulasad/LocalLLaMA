import React, { lazy, Suspense } from 'react';

const Page1ltbrlf = lazy(() => import('./Page'));

const LazyPage1ltbrlf = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1ltbrlf />
  </Suspense>
);

export { LazyPage1ltbrlf };
