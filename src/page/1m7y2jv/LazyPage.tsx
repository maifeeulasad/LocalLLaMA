import React, { lazy, Suspense } from 'react';

const Page1m7y2jv = lazy(() => import('./Page'));

const LazyPage1m7y2jv = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m7y2jv />
  </Suspense>
);

export { LazyPage1m7y2jv };
