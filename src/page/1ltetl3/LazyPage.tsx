import React, { lazy, Suspense } from 'react';

const Page1ltetl3 = lazy(() => import('./Page'));

const LazyPage1ltetl3 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1ltetl3 />
  </Suspense>
);

export { LazyPage1ltetl3 };
