import React, { lazy, Suspense } from 'react';

const Page1lq5wmh = lazy(() => import('./Page'));

const LazyPage1lq5wmh = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lq5wmh />
  </Suspense>
);

export { LazyPage1lq5wmh };
