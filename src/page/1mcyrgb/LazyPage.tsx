import React, { lazy, Suspense } from 'react';

const Page1mcyrgb = lazy(() => import('./Page'));

const LazyPage1mcyrgb = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mcyrgb />
  </Suspense>
);

export { LazyPage1mcyrgb };
