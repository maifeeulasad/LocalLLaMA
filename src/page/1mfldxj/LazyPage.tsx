import React, { lazy, Suspense } from 'react';

const Page1mfldxj = lazy(() => import('./Page'));

const LazyPage1mfldxj = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mfldxj />
  </Suspense>
);

export { LazyPage1mfldxj };
