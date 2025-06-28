import React, { lazy, Suspense } from 'react';

const Page1gjje70 = lazy(() => import('./Page'));

const LazyPage1gjje70 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1gjje70 />
  </Suspense>
);

export { LazyPage1gjje70 };
