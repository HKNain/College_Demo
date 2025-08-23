
const Hero = () => {


  return (
    
    <div id="HeroMain" className="h-screen z-40 w-full bg-[url('https://images.pexels.com/photos/1438081/pexels-photo-1438081.jpeg')] 
    bg-no-repeat bg-center bg-cover flex flex-col justify-center items-center gap-9">
       
        <div className="h-40 w-40 mt-24">
        

      <img src="https://rha.socet.edu.in/img/redhat.png" alt="" />
        </div>
        <h1 id="HomeHeading3"  className="text-3xl font-bold text-white">Bridge the gap between education and industry</h1>
        <div className="text-xl font-bold text-white flex flex-col justify-center items-center">
            <h1 id="HomeHeading1">Red Hat Academy turns academic institutions into centers for enterprise-ready talent</h1>
            <h1 id="HomeHeading2">by outfitting them with Red Hat training and certification.</h1>
        </div>

        <button id="HomeButton" className="bg-transparent border-2 font-semibold hover:bg-red-500 hover:transition-colors hover:duration-700 text-white border-red-700 px-8 py-2 rounded-3xl"><a href="">About RHA - SOGI</a></button>

    </div>
  )
}

export default Hero
