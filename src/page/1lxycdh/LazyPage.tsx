import React, { lazy, Suspense } from 'react';

const Page1lxycdh = lazy(() => import('./Page'));

const LazyPage1lxycdh = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lxycdh />
  </Suspense>
);

export { LazyPage1lxycdh };
