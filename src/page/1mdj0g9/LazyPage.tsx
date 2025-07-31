import React, { lazy, Suspense } from 'react';

const Page1mdj0g9 = lazy(() => import('./Page'));

const LazyPage1mdj0g9 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mdj0g9 />
  </Suspense>
);

export { LazyPage1mdj0g9 };
