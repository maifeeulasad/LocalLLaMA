import React, { lazy, Suspense } from 'react';

const Page1lpn8jt = lazy(() => import('./Page'));

const LazyPage1lpn8jt = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lpn8jt />
  </Suspense>
);

export { LazyPage1lpn8jt };
