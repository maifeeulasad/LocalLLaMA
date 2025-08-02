import React, { lazy, Suspense } from 'react';

const Page1mf8la7 = lazy(() => import('./Page'));

const LazyPage1mf8la7 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mf8la7 />
  </Suspense>
);

export { LazyPage1mf8la7 };
