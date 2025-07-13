import React, { lazy, Suspense } from 'react';

const Page1ly59tz = lazy(() => import('./Page'));

const LazyPage1ly59tz = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1ly59tz />
  </Suspense>
);

export { LazyPage1ly59tz };
