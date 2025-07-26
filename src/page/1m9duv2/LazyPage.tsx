import React, { lazy, Suspense } from 'react';

const Page1m9duv2 = lazy(() => import('./Page'));

const LazyPage1m9duv2 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m9duv2 />
  </Suspense>
);

export { LazyPage1m9duv2 };
