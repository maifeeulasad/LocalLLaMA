import React, { lazy, Suspense } from 'react';

const Page1m5l52r = lazy(() => import('./Page'));

const LazyPage1m5l52r = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m5l52r />
  </Suspense>
);

export { LazyPage1m5l52r };
