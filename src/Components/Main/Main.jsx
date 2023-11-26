import React from 'react'
import Logo from '../Assets/Logo.png';


import './main.css';

import BookingForm from '../BookingForm/BookingForm';

function Main({setFormState}) {
  var text = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio asperiores, quibusdam praesentium sit 
  sint eaque laborum et tempore beatae? Culpa facere eaque quam quisquam impedit minima dolor. Error, explicabo blanditiis
  deserunt debitis quia repellendus ad quasi beatae corporis unde quisquam asperiores autem odit amet sequi, 
  exercitationem similique suscipit quas eius, at harum? Consequatur hic dignissimos quae eos a officia sunt nihil,
  aliquam maxime et, labore voluptatem. Porro sapiente optio nam vitae praesentium officia sit nostrum, ipsum laudantium
  esse dolorem ut officiis iusto quis aut enim. Quo adipisci dicta commodi suscipit obcaecati, molestias exercitationem
  facilis itaque? Aperiam expedita rem iure molestias dolores aspernatur libero, ratione asperiores incidunt provident
  distinctio quo quaerat atque hic voluptas odit sequi reprehenderit. Libero cupiditate praesentium delectus temporibus
  fugit ipsam minima laboriosam ut sit assumenda vel sunt pariatur totam, doloremque inventore iure! Hic sit ullam animi
  aspernatur corporis odit. In quisquam odit consectetur veritatis dolorem ipsum tempora eos voluptate perferendis
  reprehenderit sunt, laboriosam incidunt fuga aspernatur fugiat, illo velit, fugit excepturi dignissimos sit adipisci
  nobis impedit. Culpa, libero labore ipsum ab beatae mollitia pariatur iste alias! Quae quia, atque repudiandae minus 
  istinctio temporibus dolores doloribus voluptatum optio hic consequatur magnam dolore quisquam eaque autem sed impedit,
  consectetur non beatae laborum omnis fugiat. Quae ad quas nobis fugiat in eaque aperiam ipsam expedita quisquam.
  Corrupti, quidem earum numquam facilis, nesciunt ratione officiis eius dolorum recusandae dolor eveniet nulla doloremque
  voluptatum, perspiciatis magni obcaecati? Laboriosam sint totam ab fuga, nulla odit rerum earum eum. Id, minus? Unde,
  excepturi? Omnis molestias repudiandae voluptatem, consectetur maxime voluptatum dolore voluptas hic a natus,
  ipsum, aliquid animi sequi nemo quos voluptates ducimus sapiente! Nostrum, quaerat. Dolorum excepturi repudiandae cumque
  officiis, pariatur iste animi aperiam sint exercitationem optio assumenda deleniti eos ipsa omnis dicta veniam, deserunt,
  eligendi non cum! Accusantium quo maxime delectus? Perspiciatis?`;
  return (
    <>
      <main className='mainWrap'>
        <section className='body'>
          <div className="top">
            <h1 className='banner title el'>My Kashmir Tour</h1>
            <h6 className='banner approval el'> J&K Govt Approved </h6>
          </div>
        </section>
        <section className='mid'>
          <div className='el details'>
            <p className='cc'>
              {text.slice(0,400)}
            </p>
            <img style={{'objectFit':'cover','borderRadius':'50%'}} width="300" height="300" src={Logo} alt="logo" />
            <p className='cc'>
              {text.slice(0,400)}
            </p>
          </div>
            {<BookingForm setFormState={setFormState}/>}
        </section>
      </main>
    </>
  )
}

export default Main;