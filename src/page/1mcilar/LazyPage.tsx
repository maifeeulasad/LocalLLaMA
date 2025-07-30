import React, { lazy, Suspense } from 'react';

const Page1mcilar = lazy(() => import('./Page'));

const LazyPage1mcilar = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mcilar />
  </Suspense>
);

export { LazyPage1mcilar };
