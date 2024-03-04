import React from 'react'

const Wishes = () => {
    const wishCat = [
        {
            wishname : "Random",
            wishendpoint : '/random'
        },
        {
            wishname : "Random",
            wishendpoint : '/random'
        },
        {
            wishname : "Random",
            wishendpoint : '/random'
        }
      
    ]
  return (
    <section>
        <div className="conatiner max-w-[75rem] mx-auto border">
            <div className="heading my-8">
                <h1 className='text-white text-[1.2rem] font-[800]'>Explore Wishes</h1>
                <div className="flex my--10">
                    <div className="pill px-1 py-1 rounded-[6px] bg-white text-red-600">
                            Tech
                    </div>
                </div>
            </div>

        </div>
    </section>
  )
}

export default Wishes