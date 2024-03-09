import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const HomePage = lazy(() => import('./pages/Home.tsx'));
const LoginPage = lazy(() => import('./pages/Login.tsx'));
const GroupPage = lazy(() => import('./pages/Groups.tsx'));
const ChatPage = lazy(() => import('./pages/Chat.tsx'));





const App = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/group" element={<GroupPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/chat:chatId" element={<ChatPage />} />

        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default App;
