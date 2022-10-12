import "./index.css";

const header = `
    <header>
        <div class="p-8 justify-between border-b-8 border-b-primary hidden lg:flex">
          <div class="flex items-center">
            <div class="mr-12">
            <img class="w-32" src="./src/assets/photo/logo.png" alt="">
            </div>
            <nav>
              <ul class="flex gap-x-14 ">
                <li><a class="text-black text-[18px] xl:text-xl" href="#">Home</a></li>
                <li><a class="text-black text-[18px] xl:text-xl" href="#">Find A Therapist</a></li>
                <li><a class="text-black text-[18px] xl:text-xl" href="#">Join As A Therapist</a></li>
                <li><a class="text-black text-[18px] xl:text-xl" href="#">About</a></li>
                <li><a class="text-black text-[18px] xl:text-xl" href="#">Contact</a></li>
              </ul>
            </nav>
          </div>
          <div class="flex items-center text-3xl hover:text-secondary cursor-pointer">
            <i class="fa-solid fa-user pr-1 text-2xl xl:text-[28px]"></i>
            <i class="fa-solid fa-angle-down text-2xl"></i>
          </div>
        </div>
        <div class=" lg:hidden">
          <div class="">
            <div class=" relative flex justify-between items-center py-5 px-6 xs:px-8">
              <div class="">
                <img class="max-w-[92px] hidden md:block lg:hidden " src="./src/assets/photo/logo.png" alt="">
                <img class="max-w-[159px] block md:hidden " src="./src/assets/photo/mobile-logo.png" alt="">
              </div>
              <div class="">
                <i class="fa-solid fa-bars text-4xl"></i>
              </div>
            </div>
            <div class="absolute top-0 w-full h-full hidden ">
              <div class="flex">
                <div class="w-1/2 h-screen bg-white">
                  <div class="py-5 px-6 md:flex justify-between items-center">
                    <div class="">
                      <img class="max-w-[100px] hidden md:block lg:hidden " src="./src/assets/photo/logo.png" alt="">
                      <img class="max-w-full block md:hidden " src="./src/assets/photo/mobile-logo.png" alt="">
                    </div>
                    <div class="hidden md:block">
                      <i class="fa-sharp fa-solid fa-xmark text-3xl"></i>
                    </div>
                  </div>
                  <div class="pt-2">
                    <ul class="text-center px-2 xs:px-0">
                      <li><a class="text-black text-[18px] xl:text-xl mb-6 inline-block" href="#">Home</a></li>
                      <li><a class="text-black text-[18px] xl:text-xl mb-6 inline-block" href="#">Find A Therapist</a></li>
                      <li><a class="text-black text-[18px] xl:text-xl mb-6 inline-block" href="#">Join As A Therapist</a></li>
                      <li><a class="text-black text-[18px] xl:text-xl mb-6 inline-block" href="#">About</a></li>
                      <li><a class="text-black text-[18px] xl:text-xl mb-6 inline-block" href="#">Contact</a></li>
                    </ul>
                    <div class="flex justify-center items-center text-3xl cursor-pointer hover:text-secondary">
                      <i class="fa-solid fa-user pr-1 text-2xl "></i>
                      <i class="fa-solid fa-angle-down text-2xl"></i>
                    </div>
                    <div class="flex justify-center pt-6">
                      <div class="block text-center">
                        <p class="inline-block pb-3">Select Profile Type</p>
                        <button class="mb-4 font-semibold text-xl xs:text-2xl py-2 px-6 leading-9 text-primary-100 bg-secondary-200 rounded block">THERAPIST</button>
                        <button class=" mx-auto font-semibold text-xl xs:text-2xl py-2 px-6 leading-9 text-primary-100 bg-secondary-200 rounded block">PATIENT</button>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="w-1/2 h-screen bg-low-bg md:bg-primary-100"></div>
              </div>
            </div>
          </div>
        </div>
      </header>
`;

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
                    <li><a class="text-black hover:text-primary text-15px " href="#">Home</a></li>
                    <li><a class="text-black hover:text-primary text-15px " href="#">About</a></li>
                    <li><a class="text-black hover:text-primary text-15px " href="#">Contact</a></li>
                    <li><a class="text-black hover:text-primary text-15px " href="#">FAQs</a></li>
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

document.getElementById('header').innerHTML = header;
document.getElementById('footer').innerHTML = footer;