import React, { lazy, Suspense } from 'react';

const Page1mav8p7 = lazy(() => import('./Page'));

const LazyPage1mav8p7 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mav8p7 />
  </Suspense>
);

export { LazyPage1mav8p7 };
