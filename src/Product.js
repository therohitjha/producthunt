import React, { useContext } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { ProductContext } from "./App";
function Product() {
  const { product, comments, likes, setLikes } = useContext(ProductContext);

  return (
    <>
      <Header />
      <div className="center height">
        {product &&
          product.map((item) => (
            <img
              src={item.thumbnail.image_url}
              alt=""
              key={item.thumbnail.id}
            />
          ))}
        <h4 className="like">NO. Of Likes :- {likes}</h4>
        <button
          className="likeBtn"
          onClick={() => setLikes((prevData) => prevData + 1)}
        >
          Like
        </button>

        <h3 className="commentsHeading">Top 5 Comments :-</h3>
        {comments &&
          comments.map((comment, index) => (
            <h5 className="comments" key={comment.id}>
              {index} :- {comment.body}
            </h5>
          ))}
      </div>

      <Footer />
    </>
  );
}

export default Product;
