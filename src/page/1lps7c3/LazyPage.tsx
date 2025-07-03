import React, { lazy, Suspense } from 'react';

const Page1lps7c3 = lazy(() => import('./Page'));

const LazyPage1lps7c3 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lps7c3 />
  </Suspense>
);

export { LazyPage1lps7c3 };
