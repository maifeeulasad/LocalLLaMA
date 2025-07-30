import React, { lazy, Suspense } from 'react';

const Page1mcqlv7 = lazy(() => import('./Page'));

const LazyPage1mcqlv7 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mcqlv7 />
  </Suspense>
);

export { LazyPage1mcqlv7 };
