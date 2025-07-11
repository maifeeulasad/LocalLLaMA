import React, { lazy, Suspense } from 'react';

const Page1lwrd38 = lazy(() => import('./Page'));

const LazyPage1lwrd38 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lwrd38 />
  </Suspense>
);

export { LazyPage1lwrd38 };
