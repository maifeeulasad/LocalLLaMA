import React, { lazy, Suspense } from 'react';

const Page1mantju = lazy(() => import('./Page'));

const LazyPage1mantju = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mantju />
  </Suspense>
);

export { LazyPage1mantju };
