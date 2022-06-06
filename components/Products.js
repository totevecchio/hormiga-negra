/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import Link from "next/link";

const Products = ({ products }) => {
  const [hoverName, setHoverName] = useState("");
  

  return (
    <div>
      <div className="list">
        <div className="productBox">
          <div className="name">
            <h2>{hoverName}</h2>
          </div>
          {products.map((product) => (
            // eslint-disable-next-line react/jsx-key
            <div className="box">
              <Link
                href={{
                  pathname: `/${product.id}`,
                  query: { name: product.name },
                }}
                key={product.id}
                passHref={true}
              >
                <a>
                  <img
                    src={product.url}
                    width={200}
                    height={200}
                    alt="photo"
                    onMouseEnter={(e) => (e.currentTarget.src = product.url1)}
                    onMouseLeave={(e) => (e.currentTarget.src = product.url)}
                    onMouseOver={(e) => setHoverName(product.name)}
                  />
                </a>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
