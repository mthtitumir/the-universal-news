"use client"
import { FacebookShareButton, TwitterShareButton, WhatsappShareButton, FacebookMessengerShareButton } from 'react-share';
import { BiLogoFacebook, BiLogoTwitter } from 'react-icons/bi'

const Test = () => {
  const shareUrl = window.location.href;
  const title = 'Check out this awesome Article!';
  // const vdoLink = <><iframe width="560" height="315" src="https://www.youtube.com/embed?v=dQw4w9WgXcQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe></>
  return (
    <div>
      <p>hello</p>
      <div className='flex items-center gap-2 text-xl md:text-2xl text-white'>
        <FacebookShareButton url={shareUrl} quote={title}>
          <BiLogoFacebook className='rounded-full bg-blue-600 ' ></BiLogoFacebook>
        </FacebookShareButton>
        <TwitterShareButton url={shareUrl} title={title}>
          <BiLogoTwitter className='rounded-full bg-blue-50 text-sky-500'></BiLogoTwitter>
        </TwitterShareButton>
        <WhatsappShareButton url={shareUrl} title={title}>
          <BiLogoTwitter className='rounded-full bg-blue-50 text-sky-500'></BiLogoTwitter>
        </WhatsappShareButton>
        <FacebookMessengerShareButton url={shareUrl} title={title}>
          <BiLogoTwitter className='rounded-full bg-blue-50 text-sky-500'></BiLogoTwitter>
        </FacebookMessengerShareButton>
      </div>
      {/* <div className='flex items-center gap-2 text-xl md:text-2xl text-white'>

        <BiLogoLinkedin className='rounded-full text-blue-700'></BiLogoLinkedin>
        <BiLogoInstagram className='rounded-full text-indigo-600'></BiLogoInstagram>

        <PiShareFatFill className='rounded-full text-red-600'></PiShareFatFill>
      </div> */}
    </div>
  )
}

export default Test