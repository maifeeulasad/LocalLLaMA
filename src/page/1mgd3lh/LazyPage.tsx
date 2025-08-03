import React, { lazy, Suspense } from 'react';

const Page1mgd3lh = lazy(() => import('./Page'));

const LazyPage1mgd3lh = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mgd3lh />
  </Suspense>
);

export { LazyPage1mgd3lh };
