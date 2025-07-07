import React, { lazy, Suspense } from 'react';

const Page1ltk7yh = lazy(() => import('./Page'));

const LazyPage1ltk7yh = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1ltk7yh />
  </Suspense>
);

export { LazyPage1ltk7yh };
