import Image from 'next/image'

const PFP = () => {
    return (
        <div className='fixed right-0 m-2'><Image
            src="https://avatars.githubusercontent.com/u/82721356?v=4"
            width="400"
            height="400"
        /></div>
    )
}

export default PFP;