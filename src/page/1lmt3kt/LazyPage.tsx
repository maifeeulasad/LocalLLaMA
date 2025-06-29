import React, { lazy, Suspense } from 'react';

const Page1lmt3kt = lazy(() => import('./Page'));

const LazyPage1lmt3kt = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lmt3kt />
  </Suspense>
);

export { LazyPage1lmt3kt };
