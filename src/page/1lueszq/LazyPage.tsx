import React, { lazy, Suspense } from 'react';

const Page1lueszq = lazy(() => import('./Page'));

const LazyPage1lueszq = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lueszq />
  </Suspense>
);

export { LazyPage1lueszq };
