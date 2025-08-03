import React, { lazy, Suspense } from 'react';

const Page1mfwec7 = lazy(() => import('./Page'));

const LazyPage1mfwec7 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mfwec7 />
  </Suspense>
);

export { LazyPage1mfwec7 };
