import "@fortawesome/fontawesome-free/css/all.min.css";

function Footer() {
  return (
    <footer className="bg-neutral-900 text-center text-white py-3">
      <div className="container mx-auto flex items-center justify-center">
        <div className="flex items-center py-3">
          <div className="flex flex-col items-center">
            <span className="border border-white h-5 mx-2"></span>
            <a href="https://www.facebook.com/basem.saeed.585/" className="text-white hover:text-[#4061a7] px-4 py-2  text-xl">
              <i className="fab fa-facebook-f"></i>
            </a>
            <span className="border border-white h-5 mx-2"></span>
          </div>
          
          <div className="flex flex-col items-center">
            <span className="border border-white h-5 mx-2"></span>
            <a href="https://github.com/basem19/" className="text-white  px-4 py-2 text-xl">
              <i className="fab fa-github"></i>
            </a>
            <span className="border border-white h-5 mx-2"></span>
          </div>
          
          <div className="flex flex-col items-center">
            <span className="border border-white h-5 mx-2"></span>
            <a href="https://www.linkedin.com/in/bassemsaeedsaad/" className="text-white hover:text-[#0077b5] px-4 py-2 text-xl">
              <i className="fab fa-linkedin-in"></i>
            </a>
            <span className="border border-white h-5 mx-2"></span>
          </div>
          
          <div className="flex flex-col items-center">
            <span className="border border-white h-5 mx-2"></span>
            <a href="https://www.instagram.com/basem.s3ud/" className="text-white hover:text-[#e1306c] px-4 py-2 text-xl">
              <i className="fab fa-instagram"></i>
            </a>
            <span className="border border-white h-5 mx-2"></span>
          </div>
        </div>
      </div>
      <h2 className="text-2xl">&copy; 2024 Copyright By :<span className="text-blue-500"> Basem Saeed</span></h2>
    </footer>
  );
}

export default Footer;
