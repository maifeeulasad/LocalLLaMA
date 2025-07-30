import React, { lazy, Suspense } from 'react';

const Page1md00oc = lazy(() => import('./Page'));

const LazyPage1md00oc = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1md00oc />
  </Suspense>
);

export { LazyPage1md00oc };
