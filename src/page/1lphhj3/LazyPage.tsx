import React, { lazy, Suspense } from 'react';

const Page1lphhj3 = lazy(() => import('./Page'));

const LazyPage1lphhj3 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lphhj3 />
  </Suspense>
);

export { LazyPage1lphhj3 };
