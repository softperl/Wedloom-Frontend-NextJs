"use client";
import React, { use, useEffect, useState } from "react";
import BlogCard from "@/components/blogList/blogCard";
import { getCategories, getPosts } from "@/lib/api";

const BlogList = () => {
  const [posts, setPosts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [q, setQ] = useState("");
  const [total, setTotal] = useState(0);

  const fetchData = async () => {
    try {
      const { data } = await getPosts({
        q,
        page: currentPage,
        perPage: 10,
      });
      const { data: catData } = await getCategories();
      setCategories(catData.categories);
      setPosts(data.posts);
      setTotal(data.total);
      console.log(data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [currentPage]);

  if (loading) {
    return (
      <div className="blogList__container">
        <div className="blogList_container_content container mx-auto lg:px-20 px-2">
          <div className="blog_cards">
            <div className="p-8">Loading...</div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="blogList__container">
      <div className="blogList_container_content container mx-auto lg:px-20 px-2">
        <div className="blog_cards">
          <BlogCard posts={posts} categories={categories} />
        </div>
      </div>
    </div>
  );
};

export default BlogList;
