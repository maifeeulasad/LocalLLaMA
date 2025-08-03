import React, { lazy, Suspense } from 'react';

const Page1mgbprh = lazy(() => import('./Page'));

const LazyPage1mgbprh = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mgbprh />
  </Suspense>
);

export { LazyPage1mgbprh };
