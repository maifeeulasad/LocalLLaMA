import React, { lazy, Suspense } from 'react';

const Page1m4rmd5 = lazy(() => import('./Page'));

const LazyPage1m4rmd5 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m4rmd5 />
  </Suspense>
);

export { LazyPage1m4rmd5 };
