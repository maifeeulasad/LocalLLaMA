import React, { lazy, Suspense } from 'react';

const Page1mcgguo = lazy(() => import('./Page'));

const LazyPage1mcgguo = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mcgguo />
  </Suspense>
);

export { LazyPage1mcgguo };
