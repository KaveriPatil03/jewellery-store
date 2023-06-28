import React from 'react'

const Footer = () => {
  return (
    <>
      {/* <!-- FOOTER --> */}
      <section className="footer bg-dark text-white">
        <div className="container">
          <footer className="py-5">
            <div className="row">
            <div className="col-lg-5 col-sm-12">
                <h5>JEWELLERY STORE</h5>
                <p className='text-secondary'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo cumque ipsa totam impedit saepe illum numquam debitis, animi voluptatem facilis reprehenderit consectetur distinctio, mollitia, provident aliquid culpa quo veniam sed!</p>
                {/* <form >
                  <h5>Subscribe to our newsletter</h5>
                  <p>Monthly digest of whats new and exciting from us.</p>
                  <div className="d-flex w-100 gap-2">
                    <label for="newsletter1" className="visually-hidden">Email address</label>
                    <input id="newsletter1" type="text" className="form-control" placeholder="Email address" />
                    <button className="btn btn-outline-secondary" type="button">Subscribe</button>
                  </div>
                </form> */}
              </div>
              <div className="col-lg-2 col-sm-12">
                <h5>Get to know us</h5>
                <ul className="nav flex-column">
                  <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Abou Us</a></li>
                  <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Brides Of India</a>
                  </li>
                  <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Our Stores</a></li>
                  <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Blog</a></li>
                  <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Contact Us</a></li>
                </ul>
              </div>

              <div className="col-lg-2 col-sm-12">
                <h5>Let Us Help You</h5>
                <ul className="nav flex-column">
                  <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Contact Us</a></li>
                  <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">FAQs</a></li>
                  <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Payment FAQ</a></li>
                  <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Ring Size Guide</a>
                  </li>
                  <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Bangle Size Guide</a>
                  </li>
                </ul>
              </div>

              <div className="col-lg-2 col-sm-12">
                <h5>Products</h5>
                <ul className="nav flex-column">
                  <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Gold</a></li>
                  <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Diamond</a></li>
                  <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Silver</a></li>
                  <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Platinum</a></li>
                  <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Gold Coin</a></li>
                </ul>
              </div>

              
            </div>

            <div className="d-flex justify-content-between py-4 my-4 border-top">
              <p>© 2021 Company, Inc. All rights reserved.</p>
              {/* <ul className="list-unstyled d-flex">
                <li className="ms-3"><a href="#" className="text-white"><i className="fa-brands fa-twitter fa-2x"></i></a>
                </li>

                <li className="ms-3"><a href="#" className="text-white"><i className="fa-brands fa-instagram fa-2x"></i></a>
                </li>
                <li className="ms-3"><a href="#" className="text-white"><i className="fa-brands fa-facebook fa-2x"></i></a>
                </li>
              </ul> */}
            </div>

            {/* <!-- Back to top button --> */}
            {/* <button type="button" className="btn btn-danger btn-floating btn-lg" id="btn-back-to-top">
              <i className="fas fa-arrow-up"></i>
            </button> */}
          </footer>

        </div>
      </section>
      {/* <!-- END OF FOOTER --> */}
      {/* </div> */}
    </>
  )
}

export default Footer