import React, { lazy, Suspense } from 'react';

const Page1kcwx8e = lazy(() => import('./Page'));

const LazyPage1kcwx8e = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1kcwx8e />
  </Suspense>
);

export { LazyPage1kcwx8e };
