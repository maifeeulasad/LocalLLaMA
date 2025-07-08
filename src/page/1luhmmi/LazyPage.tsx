import React, { lazy, Suspense } from 'react';

const Page1luhmmi = lazy(() => import('./Page'));

const LazyPage1luhmmi = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1luhmmi />
  </Suspense>
);

export { LazyPage1luhmmi };
