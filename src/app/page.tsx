import Keyboard3D from '../components/Keyboard3D';

export default function Home() {
  return (
    <main className="w-full min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
      {/* <main className="min-h-screen bg-white"> */}
      <div className="container w-full">
        {/* <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Front-end Developer
          </h1>
          <p className="text-xl text-gray-400">
            Passionate about creating interactive web experiences & mechanical keyboards
          </p>
        </div> */}

        {/* Interactive Keyboard Section */}
        <div className="my-16">
          {/* <h2 className="text-2xl font-semibold text-center mb-8">
            Connect With Me
          </h2> */}
          <div className="relative w-fit ">
            <Keyboard3D />
            {/* <p className="text-center text-gray-400 mt-4">
              Hover and click the keys to connect!
            </p> */}
          </div>
        </div>

        {/* Projects Section */}
        {/* <section className="my-16">
          <h2 className="text-2xl font-semibold mb-8">Featured Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Add your project cards here */}
        {/* </div>
        </section> */}

        {/* About Section */}
        {/* // <section className="my-16">
        //   <h2 className="text-2xl font-semibold mb-8">About Me</h2>
        //   <div className="prose prose-invert max-w-none">
        //     <p className="text-lg">
        //       I'm a Front-end Developer intern with a passion for creating interactive
        //       and responsive web applications. My love for mechanical keyboards
        //       influences my approach to development, focusing on precision,
        //       user experience, and attention to detail.
        //     </p>
        //   </div>
        // </section> */}
      </div>
    </main>
  );
}