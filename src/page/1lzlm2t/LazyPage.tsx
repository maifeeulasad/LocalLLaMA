import React, { lazy, Suspense } from 'react';

const Page1lzlm2t = lazy(() => import('./Page'));

const LazyPage1lzlm2t = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lzlm2t />
  </Suspense>
);

export { LazyPage1lzlm2t };
