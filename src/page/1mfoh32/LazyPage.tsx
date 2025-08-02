import React, { lazy, Suspense } from 'react';

const Page1mfoh32 = lazy(() => import('./Page'));

const LazyPage1mfoh32 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mfoh32 />
  </Suspense>
);

export { LazyPage1mfoh32 };
