"use client"
import { FacebookShareButton, TwitterShareButton, WhatsappShareButton } from 'react-share';
import { BiLogoFacebook, BiLogoTwitter, BiLogoWhatsapp } from 'react-icons/bi'
import { HiOutlineClipboardCopy } from 'react-icons/hi';
import copy from 'clipboard-copy';
const SocialShare = () => {
    const shareUrl = window.location.href;
    const title = 'Check out this awesome Article!';
    const handleCopyClick = async () => {
        try {
            await copy(shareUrl);
            alert('Text copied to clipboard!');
        } catch (error) {
            console.error('Copy failed: ', error);
        }
    }
    return (
        <div className='flex items-center gap-2 text-xl md:text-2xl text-white'>
            <FacebookShareButton url={shareUrl} quote={title}><BiLogoFacebook className='rounded-full bg-blue-600 ' ></BiLogoFacebook></FacebookShareButton>
            <WhatsappShareButton url={shareUrl} quote={title}><BiLogoWhatsapp className='rounded-full text-green-600'></BiLogoWhatsapp></WhatsappShareButton>
            <TwitterShareButton url={shareUrl} quote={title}><BiLogoTwitter className='rounded-full bg-blue-50 text-sky-500'></BiLogoTwitter></TwitterShareButton>
            <HiOutlineClipboardCopy onClick={handleCopyClick} title='Copy Link' className='rounded-full text-black'></HiOutlineClipboardCopy>
        </div>
    )
}

export default SocialShare