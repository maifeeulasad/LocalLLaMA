import React, { lazy, Suspense } from 'react';

const Page1mkf543 = lazy(() => import('./Page'));

const LazyPage1mkf543 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mkf543 />
  </Suspense>
);

export { LazyPage1mkf543 };
