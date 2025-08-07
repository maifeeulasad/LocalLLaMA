import React, { lazy, Suspense } from 'react';

const Page1mjw40a = lazy(() => import('./Page'));

const LazyPage1mjw40a = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mjw40a />
  </Suspense>
);

export { LazyPage1mjw40a };
