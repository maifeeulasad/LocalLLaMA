import React, { lazy, Suspense } from 'react';

const Page1mkpixo = lazy(() => import('./Page'));

const LazyPage1mkpixo = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mkpixo />
  </Suspense>
);

export { LazyPage1mkpixo };
