import React, { lazy, Suspense } from 'react';

const Page1md8rxu = lazy(() => import('./Page'));

const LazyPage1md8rxu = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1md8rxu />
  </Suspense>
);

export { LazyPage1md8rxu };
