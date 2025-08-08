import React, { lazy, Suspense } from 'react';

const Page1mk76my = lazy(() => import('./Page'));

const LazyPage1mk76my = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mk76my />
  </Suspense>
);

export { LazyPage1mk76my };
