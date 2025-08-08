import React, { lazy, Suspense } from 'react';

const Page1mkks43 = lazy(() => import('./Page'));

const LazyPage1mkks43 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mkks43 />
  </Suspense>
);

export { LazyPage1mkks43 };
