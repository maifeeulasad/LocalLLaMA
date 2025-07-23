import React, { lazy, Suspense } from 'react';

const Page1m75bwe = lazy(() => import('./Page'));

const LazyPage1m75bwe = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m75bwe />
  </Suspense>
);

export { LazyPage1m75bwe };
