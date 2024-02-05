import React from "react";

export default function About() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="max-w-2xl mx-auto p-3 text-center">
        <div className="">
          <h1 className="text-3xl font font-semibold text-center my-7">
            About Pramod's Blog
          </h1>
          <div className="text-md text-gray-500 flex flex-col gap-6">
            <p>
              Pramod's Blog is a platform for me to share my thoughts and ideas
              on various topics. I write about web development, software
              engineering, programming languages and other topics that I find
              interesting.
            </p>
            <p>
              I started this blog as a way to document my learning journey and
              share my knowledge with others. I hope you find the content on
              this blog useful and informative.
            </p>
            <p>
              If you have any questions or feedback, feel free to get in touch
              with me. You can reach me via email or connect with me on social
              media.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
