"use client";

import { useState, useEffect} from 'react';

import Head from 'next/head';
import About from '@/components/About';
import Projects from '@/components/Projects';
import BlogPosts from '@/components/BlogPosts';
import Contact from '@/components/Contact';

const Home = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch(`/api/posts`);
      const data = await response.json();
      setPosts(data);
    }
    fetchPosts();
  }, [])

  return (
    <div>
      <Head>
        <title>Home | Paola Codes</title>
        <meta name="Paola Codes" content="Welcome to my website!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Main Content */}
      <main className="flex flex-col items-center justify-center py-2 w-full">
        <h1 className="text-4xl">
          Welcome to My Website
        </h1>
        <p className="mt-3 text-lg">
          This is the homepage of my awesome website.
        </p>

        {/* About Section */}
        <About />

        {/* Projects Section */}
        <Projects />

        {/* BlogPosts Section */}
        {/* <BlogPosts posts={posts} /> */}

        {/* Contact Section */}
        <Contact />
      </main>
    </div>
  );
}

export default Home;