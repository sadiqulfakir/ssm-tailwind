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

document.getElementById('header').innerHTML = header;