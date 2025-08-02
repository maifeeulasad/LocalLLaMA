import React, { lazy, Suspense } from 'react';

const Page1mfhji6 = lazy(() => import('./Page'));

const LazyPage1mfhji6 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mfhji6 />
  </Suspense>
);

export { LazyPage1mfhji6 };
