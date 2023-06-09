import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Feed } from "../pages/Feed";
import { Header } from "../components/Header";
import { SearchResult } from "../pages/SearchResult";
import { VideoDetails } from "../pages/VideoDetails";

export const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <div className="flex flex-col h-full">
        <Header />
        <Routes>
          <Route path="/" element={<Feed />} />
          <Route path="/searchResult/:searchQuery" element={<SearchResult />} />
          <Route path="/video/:id" element={<VideoDetails />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};
