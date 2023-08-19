export default function AboutUs(){
    return (
        <div className="bg-blue-900 relative">
            <img src="assets/images/wavesOpacity.svg" className="w-full h-24 top-0" alt="" />
            <div className="flex items-center container mx-auto gap-8 py-16">
                <img className="w-1/2" src="assets/images/about-us-img.svg" alt="" />
                <div className="text-white">
                    <h1 className="text-xl">ABOUT US</h1>
                    <h3 className="text-3xl my-4">WHO ARE WE?</h3>
                    <p className="text-normal">
                        At Kibuti Software, we're a team of tech visionaries creating cutting-edge solutions that transform industries and empower businesses. Guided by collaboration and client-central, we craft elegant software tailored to unique needs. With a commitment to staying ahead in technology, we invite you to join us in shaping the future through innovation at Kibuti Software.
                    </p>
                </div>
            </div>
        </div>
    )
}