import React, { lazy, Suspense } from 'react';

const Page1lwjok4 = lazy(() => import('./Page'));

const LazyPage1lwjok4 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lwjok4 />
  </Suspense>
);

export { LazyPage1lwjok4 };
