import React, { lazy, Suspense } from 'react';

const Page1mjq8gu = lazy(() => import('./Page'));

const LazyPage1mjq8gu = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mjq8gu />
  </Suspense>
);

export { LazyPage1mjq8gu };
