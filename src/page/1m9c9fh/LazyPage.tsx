import React, { lazy, Suspense } from 'react';

const Page1m9c9fh = lazy(() => import('./Page'));

const LazyPage1m9c9fh = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m9c9fh />
  </Suspense>
);

export { LazyPage1m9c9fh };
