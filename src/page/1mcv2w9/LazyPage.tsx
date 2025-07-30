import React, { lazy, Suspense } from 'react';

const Page1mcv2w9 = lazy(() => import('./Page'));

const LazyPage1mcv2w9 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mcv2w9 />
  </Suspense>
);

export { LazyPage1mcv2w9 };
