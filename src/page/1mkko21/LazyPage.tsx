import React, { lazy, Suspense } from 'react';

const Page1mkko21 = lazy(() => import('./Page'));

const LazyPage1mkko21 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mkko21 />
  </Suspense>
);

export { LazyPage1mkko21 };
