const Detail = ({ product }) => {

    return (
        <>
            <h1 className='text-2xl mb-4'>{product.title}</h1>
            <p>{product.description}</p>

            <img src={product.thumbnail} alt={product.title} className="mb-4"/>

            <img src={product?.images[0]} alt={product.title} />

            {/* <ReactPlayer url='https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4' type='video/mp4' /> */}

            {/* <video width="100%" height="100%" controls>
                <source src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4" />
            </video> */}

            {/* <MediaPlayer title="Sprite Fight" src="https://www.youtube.com/watch?v=XR6OaznDwl8">
                <MediaProvider>
                    <Poster className="absolute inset-0 block h-full w-full bg-black rounded-md opacity-0 transition-opacity data-[visible]:opacity-100 [&>img]:h-full [&>img]:w-full [&>img]:object-cover"
                        src={logo} alt="react logo" />
                </MediaProvider>
            </MediaPlayer> */}
        </>
    )
}

export default Detail