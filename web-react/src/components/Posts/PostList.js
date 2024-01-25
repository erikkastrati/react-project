import React, { useState, useEffect } from "react";
import { useSpring, animated } from "@react-spring/web";
import CardComponent from "../Cards/CardComponent";
import "./PostList.css";
import { fetchPosts } from "../../api";
import { useInView } from "react-intersection-observer";

const PostList = () => {
  const [posts, setPosts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const postsData = await fetchPosts(searchTerm);
        setPosts(postsData);
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    };

    fetchData();
  }, [searchTerm]);

  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  const slideUpProps = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? "translateX(0)" : "translateX(-100%)",
    config: { duration: 2000 },
  });

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <>
      <animated.div ref={ref} style={slideUpProps} className="posts">
        <div className="post-title">
          <h2 className="bluetext">Our Services</h2>
          <h1>
            High-impact services <br /> for your business
          </h1>
        </div>
        <div className="input__container">
          <div className="shadow__input"></div>
          <button className="input__button__shadow">
            <svg
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              height="20px"
              width="20px">
              <path
                d="M4 9a5 5 0 1110 0A5 5 0 014 9zm5-7a7 7 0 104.2 12.6.999.999 0 00.093.107l3 3a1 1 0 001.414-1.414l-3-3a.999.999 0 00-.107-.093A7 7 0 009 2z"
                fillRule="evenodd"
                fill="#17202A"></path>
            </svg>
          </button>
          <input
            type="text"
            name="text"
            className="input__search"
            placeholder="What do you want to search?"
            value={searchTerm}
            onChange={handleSearchChange}
          />
        </div>

        <div className="post-list">
          {posts.length >= 1
            ? posts.map((post) => (
                <CardComponent
                  key={post.id}
                  title={post.title}
                  content={post.body}
                  className="per_post"
                />
              ))
            : "No Data with these keywords"}
        </div>
      </animated.div>
    </>
  );
};

export default PostList;
