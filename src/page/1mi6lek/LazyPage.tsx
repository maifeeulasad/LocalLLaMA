import React, { lazy, Suspense } from 'react';

const Page1mi6lek = lazy(() => import('./Page'));

const LazyPage1mi6lek = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mi6lek />
  </Suspense>
);

export { LazyPage1mi6lek };
