import React from 'react';
import Link from 'next/link';
import styles from '../styles/Carousel.module.css';

function Carousel({campaignItems}) {
    return (
        <div id="carousel" className="carousel slide">
           <div className="carousel-inner">
        {campaignItems.map((product, index) => (
          <div key={product.id} className={`carousel-item ${index === 0 ? 'active' : ''}`}>
            <Link href={`/product/${product.id}`} className="text-decoration-none">
              <div className="container">
                <div className="row align-items-center">
                  <div className="col-md-6">
                    <img 
                      src={product.image} 
                      className="img-fluid" 
                      alt={product.title}
                      style={{ cursor: 'pointer' }} 
                    />
                  </div>
                  <div className="col-md-6">
                    <h3 className="mb-3">{product.title}</h3>
                    <p className="text-secondary text-decoration-line-through mb-2">{product.oldPrice} TL</p>
                    <p className="text-danger fs-3 fw-bold">{product.newPrice} TL</p>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carousel" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carousel" data-bs-slide="next"> 
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
        </div>
    );
}

export default Carousel;
