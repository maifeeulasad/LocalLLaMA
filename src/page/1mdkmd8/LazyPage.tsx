import React, { lazy, Suspense } from 'react';

const Page1mdkmd8 = lazy(() => import('./Page'));

const LazyPage1mdkmd8 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mdkmd8 />
  </Suspense>
);

export { LazyPage1mdkmd8 };
