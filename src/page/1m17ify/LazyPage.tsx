import React, { lazy, Suspense } from 'react';

const Page1m17ify = lazy(() => import('./Page'));

const LazyPage1m17ify = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m17ify />
  </Suspense>
);

export { LazyPage1m17ify };
