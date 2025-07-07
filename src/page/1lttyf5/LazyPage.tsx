import React, { lazy, Suspense } from 'react';

const Page1lttyf5 = lazy(() => import('./Page'));

const LazyPage1lttyf5 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lttyf5 />
  </Suspense>
);

export { LazyPage1lttyf5 };
