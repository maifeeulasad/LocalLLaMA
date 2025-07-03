import React, { lazy, Suspense } from 'react';

const Page1lpvwh3 = lazy(() => import('./Page'));

const LazyPage1lpvwh3 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lpvwh3 />
  </Suspense>
);

export { LazyPage1lpvwh3 };
