import React, { lazy, Suspense } from 'react';

const Page1mcv5b0 = lazy(() => import('./Page'));

const LazyPage1mcv5b0 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mcv5b0 />
  </Suspense>
);

export { LazyPage1mcv5b0 };
