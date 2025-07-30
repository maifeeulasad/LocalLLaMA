import React, { lazy, Suspense } from 'react';

const Page1mcdypn = lazy(() => import('./Page'));

const LazyPage1mcdypn = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mcdypn />
  </Suspense>
);

export { LazyPage1mcdypn };
