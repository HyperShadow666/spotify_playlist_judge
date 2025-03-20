import React from 'react'


const Albumitem = ({ image, name, desc, external_urls }) => {
    const handleRedirect = () => {
        console.log(external_urls)
        window.open(external_urls.spotify, '_blank');
      };
    


    return (
        <div onClick={handleRedirect} className='min-w-[180px] overflow-auto w-[180px] p-2 px-3 m-1 rounded cursor-pointer bg-[#212121] hover:bg-[#ffffff26]'>
    <img className='rounded w-[100%] h-[180px] object-cover' src={image} alt="" />
    <p className='font-bold mt-2 mb-1'>{name}</p>
    <p className='text-slate-200 text-sm mb-2'>{desc}</p>
</div>
    )
}

export default Albumitem