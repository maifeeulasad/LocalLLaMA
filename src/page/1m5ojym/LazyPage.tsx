import React, { lazy, Suspense } from 'react';

const Page1m5ojym = lazy(() => import('./Page'));

const LazyPage1m5ojym = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m5ojym />
  </Suspense>
);

export { LazyPage1m5ojym };
