const footer = `
    <footer>
        <div class="py-9" style="background-image: url(./src/assets/photo/footer-background.png) ;" >
          <div class="md:flex">
            <div class=" md:w-2/5 lg:w-34 xl:w-2/5 pb-6 flex justify-center items-center">
              <div class="" >
                <div class="md:max-w-xs mx-auto w-52 flex justify-center pb-6" >
                  <img class="" src="./src/assets/photo/footer-logo.png" alt="">
                </div>
                <div class="text-3xl flex justify-center text-primary">
                  <i class="fa-brands fa-instagram p-1 mr-6 text-primary"></i>
                  <i class="fa-brands fa-twitter p-1 mr-6 text-primary"></i>
                  <i class="fa-brands fa-facebook-f p-1 mr-6 text-primary"></i>
                  <i class="fa-brands fa-linkedin p-1 text-primary "></i>
                </div>
                <div class="hidden text-xs pt-6 mx-auto px-3 md:block lg:hidden text-center">
                  <p>Copyright &copy; 2020 Start Saying More, LLC. All Rights Reserved. | Privacy Policy | Terms & Conditions</p>
                </div>
              </div>
            </div>
            <div class=" lg:flex lg:pr-9 xl:pr-0">
              <div class="lg:pr-12">
                <div class="pb-9 lg:pb-16 ">
                  <h6 class="font-semibold text-15px pb-4 text-center lg:text-left" >Stay in touch with us!</h6>
                  <div class="flex justify-center text-center">
                    <div class="inline-block xs:flex justify-center">
                      <div class="max-w-[235px]">
                        <input 
                        class=" w-full focus:outline-none text-base text-neutral-400 mr-4 border-solid border border-gray-300 py-3 px-4 rounded " 
                        type="email" 
                        placeholder="Email Address"
                        name="email" 
                        id="sub-email ">
                      </div>
                      <button class=" mt-3 xs:mt-0 xs:ml-3 font-semibold text-2xl py-2 px-6 leading-9 text-primary-100 bg-secondary-200 rounded ">SUBMIT</button>
                    </div>
                  </div>
                </div>
                <div class="">
                  <h6 class="font-semibold text-15px pb-4 text-center lg:text-left">Quick Links</h6>
                  <ul class="grid grid-cols-2 gap-y-6 text-center lg:text-left max-w-[400px] mx-auto">
                    <li><a class="text-black hover:text-primary text-15px " href="./index.html">Home</a></li>
                    <li><a class="text-black hover:text-primary text-15px " href="./about.html">About</a></li>
                    <li><a class="text-black hover:text-primary text-15px " href="./contact.html">Contact</a></li>
                    <li><a class="text-black hover:text-primary text-15px " href="./faq.html">FAQs</a></li>
                    <li><a class="text-black hover:text-primary text-15px " href="#">Donate</a></li>
                    <li><a class="text-orange-700 font-semibold hover:text-primary text-15px " href="#">Emergency Resources</a></li>
                  </ul>
                </div>
              </div>
              <div class="pl-12 border-l border-primary hidden lg:block">
                <div class="mb-6">
                  <h6 class="font-semibold text-15px pb-4">
                    <span class="relative">Find A Therapist
                      <img class="absolute top-t-50 right-r-rem" src="./src/assets/photo/Speech-Submark.svg" alt=""> 
                    </span>
                  </h6>
                  <p class="pb-3 text-15px">
                    Are you ready to start your <br>
                    therapy journey? Match with <br>
                    one today!
                  </p>
                  <button class="font-semibold text-lg py-2 px-6 leading-7 text-primary-100 bg-none border-4 border-secondary-200 rounded ">START SAYING MORE</button>
                </div>
                <div class="">
                  <h6 class="font-semibold text-15px pb-4">
                    <span class="relative">Join As A Therapist 
                      <img class=" absolute -top-1 right-1-rem" src="./src/assets/photo/Lip Submark.svg" alt=""> 
                    </span>
                  </h6>
                  <p class="pb-3 text-15px">
                    Interested in joining our <br>
                    directory?
                  </p>
                  <button class=" font-semibold text-lg py-2 px-6 leading-7 text-primary-100 bg-none border-4 border-secondary-200 rounded ">REGISTER TODAY</button>
                </div>
              </div>
            </div>
          </div>
          <div class="pt-4 px-6 lg:px-0 justify-center text-center text-xs flex">
            <p>Copyright &copy; 2020 Start Saying More, LLC. All Rights Reserved. | Privacy Policy | Terms & Conditions</p>
          </div>
        </div>
      </footer>
`;

document.getElementById('footer').innerHTML = footer;