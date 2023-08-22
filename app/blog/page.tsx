export default async function Blog() {

  return (
    <div style={{
      backgroundColor: "black",
      color: "white",
    }} className="flex min-h-screen flex-col items-center p-60">
      
      <div
  className="w-full rounded-sm bg-neutral-50 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-white-200">
  <div className="border-b-2 border-[#0000002d] px-6 py-3 text-black">

<h1 className="text-5xl font-bold p-5">Success! Payment has been spplited succesfully</h1>
<hr></hr>
<a href="/" class="no-underline text-white block w-full bg-black hover:bg-black-700 focus:ring-4 focus:ring-blue-200 font-medium rounded-full text-xl px-20 py-2.5 p-5 text-center dark:focus:ring-blue-900">Split another payment</a>

<hr></hr>
  <div className="flex flex-col">
  <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
    <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
      <div className="overflow-hidden">
     
      </div>
    </div>
  </div>
</div>

  </div>



</div>

<footer className="bg-black rounded-lg shadow dark:bg-gray-900 w-full p-20">
    <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
            <a href="https://zebedee.io" className="flex items-center mb-4 sm:mb-0">
                <img src="https://zbd.gg/new-logo/zbd-white.svg" className="h-10 mr-30" alt="ZBD Logo" />
            </a>
            <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
                <li>
                    <a href="#" className="mr-4 hover:underline md:mr-6 "></a>
                </li>
                <li>
                    <a href="#" className="mr-4 hover:underline md:mr-6"></a>
                </li>
                <li>
                    <a href="#" className="mr-4 hover:underline md:mr-6 "></a>
                </li>
                <li>
                <a href="https://nbd.wtf" className="flex items-center mb-4 sm:mb-0">
                <img src="https://user-images.githubusercontent.com/1653275/194609043-0add674b-dd40-41ed-986c-ab4a2e053092.png" className="h-10 mr-30" alt="NBD Logo" />
            </a>
                </li>
            </ul>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400"><iframe className="w-full" height="323" src="https://zbd.gg/embed/yoggyac7"></iframe></span>
    </div>
</footer>


    </div>
  )
}
