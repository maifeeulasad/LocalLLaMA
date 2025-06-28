import React, { lazy, Suspense } from 'react';

const Page1fgsrx8 = lazy(() => import('./Page'));

const LazyPage1fgsrx8 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1fgsrx8 />
  </Suspense>
);

export { LazyPage1fgsrx8 };
