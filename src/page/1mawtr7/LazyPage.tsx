import React, { lazy, Suspense } from 'react';

const Page1mawtr7 = lazy(() => import('./Page'));

const LazyPage1mawtr7 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mawtr7 />
  </Suspense>
);

export { LazyPage1mawtr7 };
