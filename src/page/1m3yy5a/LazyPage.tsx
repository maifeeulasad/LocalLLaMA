import React, { lazy, Suspense } from 'react';

const Page1m3yy5a = lazy(() => import('./Page'));

const LazyPage1m3yy5a = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m3yy5a />
  </Suspense>
);

export { LazyPage1m3yy5a };
