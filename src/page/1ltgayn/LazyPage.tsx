import React, { lazy, Suspense } from 'react';

const Page1ltgayn = lazy(() => import('./Page'));

const LazyPage1ltgayn = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1ltgayn />
  </Suspense>
);

export { LazyPage1ltgayn };
